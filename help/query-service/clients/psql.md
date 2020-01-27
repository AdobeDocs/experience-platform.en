# Connect with PSQL

PSQL is a command-line interface that comes when you install Postgres on your machine. You can install it by following these instructions. 

## Install Postgres on a Mac

Open a terminal window and issue these three commands:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
brew install postgres
```

```
which psql
```

After issuing these commands, you should see the following:

```
/usr/local/bin/psql
```

## Install Postgres on a PC

1. Download and install Postgres from this [location](https://www.postgresql.org/download/windows/).

2. Edit your path variable:

    ![Image](../images/clients/psql/path.png)
    
    Next, you need to add the two lines shown that include "Postgres."
    
3. Save your updates, then open a command prompt and type:

    ```
    psql -V
    ```
    
    You should see something like this:
    
    ```
    psql (PostgreSQL) 9.5.14
    ```
## Connect PSQL and Query Service

1. Return to the Platform UI on the "Connect BI Tools" page. 

2. Click **copy** for "PSQL Command."
    
    ![Image](../images/clients/psql/connect-bi.png)
    
    **Important**: If you are on a PC, use a text editor to remove the line breaks in the command string, then copy the string.

3. Paste the command string into a terminal or command window and press Enter.
    
    You should see a result like this:
    
    ```
    psql (10.5, server 0.1.0)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    Type "help" for help.
    all=>
    ```
    
    If you don't see at least version 10.5, then you need to download that version or newer.