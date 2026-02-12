const axios = require('axios');

function parseLabels(raw) {
  try {
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

/**
 * Label → assignee mapping for PLAT.
 * Fill this with real Jira usernames when you’re ready.
 */
function getAssignee(labels) {
  const labelToAssignee = {
    // examples – replace with real mappings:
    // 'area-api': 'jdoe',       // Jira username
    // 'area-ui': 'asmith',
  };

  for (const label of labels) {
    const mapped = labelToAssignee[label.name];
    if (mapped) return mapped;
  }

  return process.env.JIRA_DEFAULT_ASSIGNEE || null;
}

async function run() {
  const {
    JIRA_BASE_URL,
    JIRA_PAT,
    JIRA_PROJECT_KEY,
    GITHUB_REPO,
    GITHUB_ISSUE_NUMBER,
    GITHUB_ISSUE_TITLE,
    GITHUB_ISSUE_BODY,
    GITHUB_ISSUE_URL,
    GITHUB_ISSUE_USER,
    GITHUB_ISSUE_LABELS
  } = process.env;

  if (!JIRA_BASE_URL || !JIRA_PAT || !JIRA_PROJECT_KEY) {
    console.error('Missing required Jira env vars (JIRA_BASE_URL, JIRA_PAT, JIRA_PROJECT_KEY).');
    process.exit(1);
  }

  const labels = parseLabels(GITHUB_ISSUE_LABELS);
  const assignee = getAssignee(labels);

  const summary = `[GitHub] ${GITHUB_ISSUE_TITLE}`;
  const description = `
Created from GitHub issue: ${GITHUB_ISSUE_URL}

Repository: ${GITHUB_REPO}
GitHub issue: #${GITHUB_ISSUE_NUMBER}
Reported by: ${GITHUB_ISSUE_USER}

Labels: ${labels.map(l => l.name).join(', ') || '(none)'}

---

${GITHUB_ISSUE_BODY || '_No description provided._'}
`.trim();

  const fields = {
    project: { key: JIRA_PROJECT_KEY },   // PLAT
    summary,
    description,
    issuetype: { name: 'Task' }           // adjust if PLAT uses a specific doc issue type
  };

  if (assignee) {
    // For Jira Data Center with PAT, username is usually valid; if PLAT uses accountId, change to { accountId: assignee }
    fields.assignee = { name: assignee };
  }

  const payload = { fields };

  try {
    const res = await axios.post(
      `${JIRA_BASE_URL}/rest/api/2/issue`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${JIRA_PAT}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(`Created Jira issue ${res.data.key} in PLAT for GitHub issue #${GITHUB_ISSUE_NUMBER}`);
  } catch (err) {
    const status = err.response?.status;
    const data = err.response?.data;
    console.error('Failed to create Jira issue');
    console.error('Status:', status);
    console.error('Response:', JSON.stringify(data, null, 2));
    process.exit(1);
  }
}

run();