---
title: Encrypting Values
description: Learn how to encrypt sensitive values when using the Reactor API.
---
# Encrypting values

When using tags in Adobe Experience Platform, some workflows require supplying sensitive values (for example, providing a private key when delivering libraries to environments via hosts). The sensitive nature of those credentials necessitates
secure transfer and storage.

This document describes how to encrypt sensitive values using [GnuPG encryption](https://www.gnupg.org/gph/en/manual/x110.html) (also known as GPG) so only the tag system can read them.

## Obtain the public GPG key and checksum

After [downloading](https://gnupg.org/download/) and installing the latest version of GPG you must obtain the public GPG key for the tags production environment:

* [GPG key](https://github.com/adobe/reactor-developer-docs/blob/master/files/launch%40adobe.com_pub.gpg)
* [Checksum](https://github.com/adobe/reactor-developer-docs/blob/master/files/launch%40adobe.com_pub.gpg.sum)

## Import the key to your keychain

Once you've save the key to your machine, the next step is to add it to your GPG keychain.

**Syntax**

```shell
gpg --import {KEY_NAME}
```

| Parameter | Description |
| --- | --- |
| `{KEY_NAME}` | The name of the public key file. |

{style="table-layout:auto"}

**Example**

```shell
gpg --import launch@adobe.com_pub.gpg
```

## Encrypt values

After adding the key to your keychain, you can start encrypting values by using the `--encrypt` flag. The following script demonstrates how this command works:

```shell
echo -n 'Example value' | gpg --armor --encrypt -r "Tags Data Encryption <launch@adobe.com>"
```

This command can be broken down as follows:

* Input is supplied to the `gpg` command.
* `--armor` creates ASCII-armored output instead of binary. This simplifies transferring the value through JSON.
* `--encrypt` instructs GPG to encrypt the data.
* `-r` sets the recipient for the data. Only the recipient (the holder of the private key that corresponds to the public key) may decrypt the data. The recipient name of the desired key may be found by examining the output of `gpg --list-keys`.

The above command uses the public key for `Tags Data Encryption <launch@adobe.com>` to encrypt the value, `Example value`, in ASCII-armored format.

The output of the command would resemble the following:

```shell
-----BEGIN PGP MESSAGE-----

hQIMAxJHCI6fydT/ARAAwQ0Y0k7eSAbd0T9seoaWX75G70O2gxAF20KY5FWiZ9/m
/RkgJwhJusZyEdazC/CmAdfXi9bsVxQT0i06ErUxXfQF0VtweRlcyRBsxzLz6Hr+
BpYGnq+cCCzGAT73Gg1CM4UWmaPKLLyWKGkXtDBAqVBRAIQT/8JhnkbyWIohHkWV
I/Uf7NrPXuaSmrqZ1SZQgwjIM3qNMR02qtqg59dncKoCQBji8Oeb8lqRLskRT0Jq
gVgbJYwSe2n6KpJkELJ6QtF9lCRl1+yU4mvM4jBHgkM1+vb1WmbFRIR40dDpg85N
0J9hVj4bg//eLRDfAdEC9kgq9Atph0WqJ5EpehdS7yVO9lO8mpbpqZ4BCGjTi/VS
isEPr6eZ2mxRbk8f9Z4csRZnkErY8ep5+cqC5CZVdmguWvC9PKzXqEsPFd0PSYk3
Qp3UIW2/JMf16E5CKmntm+gKdl6kggZOOvNQuyJYa9yNbzySPerHXsknTOxV+QP/
WXwrAL52g5+gpMib7Ve/KBz5/OViDhDqkmHzlGad73W74d+CYjf0AnuXuWRRlUMT
s8ORw1eplInldhXk2mgkGPZS/gWDs3zpKUu4GSO9AaeWldynLG/Bgh78XhumQ58h
ekGD+p3PyyvxjfS5G/wf9HQZ085+mnjpKFa7fuFBQPbg4WpBadhWrhobthC+hN3S
SAE9yWU11Y3xpoxqg4y7iYZ6rnX+qP2oUNYxC2/hdhsFbbZtUh4s51qaoLbe0iWB
OUoIPf4KxTaboHZOEy32ZBng5heVrn4i9w==
=jrfE
-----END PGP MESSAGE-----
```

This output can only br decrypted by systems that have the private key that
corresponds to the `Tags Data Encryption <launch@adobe.com>` public key.

This output is the value that should be supplied in a when sending data to the Reactor API. The system stores this encrypted output and temporarily decrypts it as necessary. For example, the system decrypts host credentials long enough to initiate a connection to the server, and then immediately removes all traces of the decrypted value.

>[!NOTE]
>
>The format of the armored, encrypted value is important. Ensure line returns are properly escaped in the value supplied in the request.
