# [SPF Validator API](https://apiverve.com/marketplace/spfvalidator?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it’s valid and optionally whether a given IP address is authorized to send emails for that domain.

The SPF Validator API provides a simple, reliable way to integrate spf validator functionality into your applications. Built for developers who need production-ready spf validator capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/spfvalidator?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/spfvalidator?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/spfvalidator)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.SPFValidator)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-spfvalidator/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_spfvalidator)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/spfvalidator)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_spfvalidator)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callSPFValidatorAPI() {
    try {
        const params = new URLSearchParams({
            domain: 'myspace.com'
        });

        const response = await fetch(`https://api.apiverve.com/v1/spfvalidator?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callSPFValidatorAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/spfvalidator?domain=myspace.com" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/spfvalidator
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/spfvalidator) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.SPFValidator
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.SPFValidator) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-spfvalidator
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-spfvalidator/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_spfvalidator
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_spfvalidator) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/spfvalidator
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/spfvalidator) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_spfvalidator
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_spfvalidator) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:spfvalidator-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/spfvalidator-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [SPF Validator API](https://apiverve.com/marketplace/spfvalidator?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/spfvalidator](https://docs.apiverve.com/ref/spfvalidator)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The SPF Validator API is commonly used for:

- **Web Applications** - Add spf validator features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with spf validator capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the SPF Validator API:

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "host": "myspace.com",
    "has_spf_record": true,
    "dns_lookups_num": 9,
    "spf_record": "v=spf1 mx ip4:63.208.226.34 ip4:204.16.32.0/22 ip4:67.134.143.0/24 ip4:216.205.243.0/24 ip4:34.85.156.5/32 ip4:35.245.108.108/32 ip4:34.86.129.193/32 ip4:34.86.134.94/32 ip4:34.85.222.234/32 ip4:34.86.176.234/32 ip4:34.86.125.212/32 ip4:34.85.224.60/32 ip4:34.86.160.49/32 ip4:35.245.64.166/32 ip4:35.188.226.11/32 ip4:34.86.208.228/32 ip4:34.85.216.144/32 ip4:35.221.22.153/32 ip4:34.86.137.108/32 ip4:34.86.51.35/32 ip4:34.150.221.40/32 ip4:34.85.216.70/32 ip4:34.86.37.191/32 ip4:34.85.214.215/32 ip4:35.236.234.82/32 ip4:34.86.161.241/32 ip4:216.32.181.16 ip4:216.178.32.0/20 ip4:168.235.224.0/24 include:_netblocks.mimecast.com -all",
    "spf_records_list": [
      {
        "origin": "myspace.com",
        "record": "v=spf1 mx ip4:63.208.226.34 ip4:204.16.32.0/22 ip4:67.134.143.0/24 ip4:216.205.243.0/24 ip4:34.85.156.5/32 ip4:35.245.108.108/32 ip4:34.86.129.193/32 ip4:34.86.134.94/32 ip4:34.85.222.234/32 ip4:34.86.176.234/32 ip4:34.86.125.212/32 ip4:34.85.224.60/32 ip4:34.86.160.49/32 ip4:35.245.64.166/32 ip4:35.188.226.11/32 ip4:34.86.208.228/32 ip4:34.85.216.144/32 ip4:35.221.22.153/32 ip4:34.86.137.108/32 ip4:34.86.51.35/32 ip4:34.150.221.40/32 ip4:34.85.216.70/32 ip4:34.86.37.191/32 ip4:34.85.214.215/32 ip4:35.236.234.82/32 ip4:34.86.161.241/32 ip4:216.32.181.16 ip4:216.178.32.0/20 ip4:168.235.224.0/24 include:_netblocks.mimecast.com -all",
        "chars_num": 637,
        "use_macro": false,
        "domains": [
          "_netblocks.mimecast.com"
        ],
        "authorized_ips": {
          "ipv4": [
            "63.208.226.34",
            "204.16.32.0/22",
            "67.134.143.0/24",
            "216.205.243.0/24",
            "34.85.156.5/32",
            "35.245.108.108/32",
            "34.86.129.193/32",
            "34.86.134.94/32",
            "34.85.222.234/32",
            "34.86.176.234/32",
            "34.86.125.212/32",
            "34.85.224.60/32",
            "34.86.160.49/32",
            "35.245.64.166/32",
            "35.188.226.11/32",
            "34.86.208.228/32",
            "34.85.216.144/32",
            "35.221.22.153/32",
            "34.86.137.108/32",
            "34.86.51.35/32",
            "34.150.221.40/32",
            "34.85.216.70/32",
            "34.86.37.191/32",
            "34.85.214.215/32",
            "35.236.234.82/32",
            "34.86.161.241/32",
            "216.32.181.16",
            "216.178.32.0/20",
            "168.235.224.0/24"
          ]
        }
      },
      {
        "origin": "_netblocks.mimecast.com",
        "record": "v=spf1 include:eu._netblocks.mimecast.com include:us._netblocks.mimecast.com include:za._netblocks.mimecast.com include:de._netblocks.mimecast.com include:au._netblocks.mimecast.com include:ca._netblocks.mimecast.com include:usb._netblocks.mimecast.com ~all",
        "chars_num": 257,
        "use_macro": false,
        "domains": [
          "eu._netblocks.mimecast.com",
          "us._netblocks.mimecast.com",
          "za._netblocks.mimecast.com",
          "de._netblocks.mimecast.com",
          "au._netblocks.mimecast.com",
          "ca._netblocks.mimecast.com",
          "usb._netblocks.mimecast.com"
        ]
      },
      {
        "origin": "eu._netblocks.mimecast.com",
        "record": "v=spf1 ip4:195.130.217.0/24 ip4:91.220.42.0/24 ip4:146.101.78.0/24 ip4:207.82.80.0/24 ip4:213.167.81.0/25 ip4:193.7.207.0/25 ip4:213.167.75.0/25 ip4:185.58.85.0/24 ip4:185.58.86.0/24 ip4:193.7.206.0/25 ip4:147.28.36.0/24 ~all",
        "chars_num": 225,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "195.130.217.0/24",
            "91.220.42.0/24",
            "146.101.78.0/24",
            "207.82.80.0/24",
            "213.167.81.0/25",
            "193.7.207.0/25",
            "213.167.75.0/25",
            "185.58.85.0/24",
            "185.58.86.0/24",
            "193.7.206.0/25",
            "147.28.36.0/24"
          ]
        }
      },
      {
        "origin": "us._netblocks.mimecast.com",
        "record": "v=spf1 ip4:207.211.31.0/25 ip4:205.139.110.0/24 ip4:216.205.24.0/24 ip4:170.10.129.0/24 ip4:63.128.21.0/24 ip4:170.10.133.0/24 ip4:185.58.84.93/32 ip4:207.211.41.113/32 ip4:207.211.30.64/26 ip4:207.211.30.128/25 ip4:216.145.221.0/24 ip4:170.10.128.0/24 ip4:170.10.132.56/29 ip4:170.10.132.64/29 ~all",
        "chars_num": 299,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "207.211.31.0/25",
            "205.139.110.0/24",
            "216.205.24.0/24",
            "170.10.129.0/24",
            "63.128.21.0/24",
            "170.10.133.0/24",
            "185.58.84.93/32",
            "207.211.41.113/32",
            "207.211.30.64/26",
            "207.211.30.128/25",
            "216.145.221.0/24",
            "170.10.128.0/24",
            "170.10.132.56/29",
            "170.10.132.64/29"
          ]
        }
      },
      {
        "origin": "za._netblocks.mimecast.com",
        "record": "v=spf1 ip4:41.74.192.0/22 ip4:41.74.200.0/23 ip4:41.74.196.0/22 ip4:41.74.204.0/23 ip4:41.74.206.0/24 ~all",
        "chars_num": 106,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "41.74.192.0/22",
            "41.74.200.0/23",
            "41.74.196.0/22",
            "41.74.204.0/23",
            "41.74.206.0/24"
          ]
        }
      },
      {
        "origin": "de._netblocks.mimecast.com",
        "record": "v=spf1 ip4:51.163.158.0/24 ip4:194.104.109.0/24 ip4:194.104.111.0/24 ip4:194.104.110.21/32 ip4:194.104.110.240/28 ip4:62.140.10.21/32 ip4:62.140.7.0/24 ip4:194.104.108.240/29 ip4:194.104.108.21/32 ip4:51.163.159.0/24 ~all",
        "chars_num": 221,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "51.163.158.0/24",
            "194.104.109.0/24",
            "194.104.111.0/24",
            "194.104.110.21/32",
            "194.104.110.240/28",
            "62.140.10.21/32",
            "62.140.7.0/24",
            "194.104.108.240/29",
            "194.104.108.21/32",
            "51.163.159.0/24"
          ]
        }
      },
      {
        "origin": "au._netblocks.mimecast.com",
        "record": "v=spf1 ip4:103.13.69.0/24 ip4:124.47.150.0/24 ip4:124.47.189.0/24 ip4:103.96.23.0/24 ip4:103.96.21.0/24 ip4:180.189.28.0/24 ip4:216.145.217.0/24 ip4:103.96.22.96/28 ip4:103.96.22.22/32 ip4:103.96.20.22/32 ip4:103.96.20.96/28 ~all",
        "chars_num": 229,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "103.13.69.0/24",
            "124.47.150.0/24",
            "124.47.189.0/24",
            "103.96.23.0/24",
            "103.96.21.0/24",
            "180.189.28.0/24",
            "216.145.217.0/24",
            "103.96.22.96/28",
            "103.96.22.22/32",
            "103.96.20.22/32",
            "103.96.20.96/28"
          ]
        }
      },
      {
        "origin": "ca._netblocks.mimecast.com",
        "record": "v=spf1 ip4:170.10.145.0/24 ip4:170.10.147.0/24 ip4:170.10.144.126/32 ip4:170.10.146.126/32 ip4:170.10.144.240/29 ip4:170.10.146.240/29 ip4:216.145.216.0/24 ~all",
        "chars_num": 160,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "170.10.145.0/24",
            "170.10.147.0/24",
            "170.10.144.126/32",
            "170.10.146.126/32",
            "170.10.144.240/29",
            "170.10.146.240/29",
            "216.145.216.0/24"
          ]
        }
      },
      {
        "origin": "usb._netblocks.mimecast.com",
        "record": "v=spf1 ip4:170.10.151.0/24 ip4:170.10.153.0/24 ip4:170.10.150.240/29 ip4:170.10.152.240/29 ip4:170.10.156.0/24 ip4:170.10.157.0/24 ~all",
        "chars_num": 135,
        "use_macro": false,
        "authorized_ips": {
          "ipv4": [
            "170.10.151.0/24",
            "170.10.153.0/24",
            "170.10.150.240/29",
            "170.10.152.240/29",
            "170.10.156.0/24",
            "170.10.157.0/24"
          ]
        }
      }
    ],
    "domains_extracted": [
      "myspace.com",
      "_netblocks.mimecast.com",
      "eu._netblocks.mimecast.com",
      "us._netblocks.mimecast.com",
      "za._netblocks.mimecast.com",
      "de._netblocks.mimecast.com",
      "au._netblocks.mimecast.com",
      "ca._netblocks.mimecast.com",
      "usb._netblocks.mimecast.com"
    ],
    "authorized_ips": {
      "ipv4": [
        "63.208.226.34",
        "204.16.32.0/22",
        "67.134.143.0/24",
        "216.205.243.0/24",
        "34.85.156.5/32",
        "35.245.108.108/32",
        "34.86.129.193/32",
        "34.86.134.94/32",
        "34.85.222.234/32",
        "34.86.176.234/32",
        "34.86.125.212/32",
        "34.85.224.60/32",
        "34.86.160.49/32",
        "35.245.64.166/32",
        "35.188.226.11/32",
        "34.86.208.228/32",
        "34.85.216.144/32",
        "35.221.22.153/32",
        "34.86.137.108/32",
        "34.86.51.35/32",
        "34.150.221.40/32",
        "34.85.216.70/32",
        "34.86.37.191/32",
        "34.85.214.215/32",
        "35.236.234.82/32",
        "34.86.161.241/32",
        "216.32.181.16",
        "216.178.32.0/20",
        "168.235.224.0/24",
        "195.130.217.0/24",
        "91.220.42.0/24",
        "146.101.78.0/24",
        "207.82.80.0/24",
        "213.167.81.0/25",
        "193.7.207.0/25",
        "213.167.75.0/25",
        "185.58.85.0/24",
        "185.58.86.0/24",
        "193.7.206.0/25",
        "147.28.36.0/24",
        "207.211.31.0/25",
        "205.139.110.0/24",
        "216.205.24.0/24",
        "170.10.129.0/24",
        "63.128.21.0/24",
        "170.10.133.0/24",
        "185.58.84.93/32",
        "207.211.41.113/32",
        "207.211.30.64/26",
        "207.211.30.128/25",
        "216.145.221.0/24",
        "170.10.128.0/24",
        "170.10.132.56/29",
        "170.10.132.64/29",
        "41.74.192.0/22",
        "41.74.200.0/23",
        "41.74.196.0/22",
        "41.74.204.0/23",
        "41.74.206.0/24",
        "51.163.158.0/24",
        "194.104.109.0/24",
        "194.104.111.0/24",
        "194.104.110.21/32",
        "194.104.110.240/28",
        "62.140.10.21/32",
        "62.140.7.0/24",
        "194.104.108.240/29",
        "194.104.108.21/32",
        "51.163.159.0/24",
        "103.13.69.0/24",
        "124.47.150.0/24",
        "124.47.189.0/24",
        "103.96.23.0/24",
        "103.96.21.0/24",
        "180.189.28.0/24",
        "216.145.217.0/24",
        "103.96.22.96/28",
        "103.96.22.22/32",
        "103.96.20.22/32",
        "103.96.20.96/28",
        "170.10.145.0/24",
        "170.10.147.0/24",
        "170.10.144.126/32",
        "170.10.146.126/32",
        "170.10.144.240/29",
        "170.10.146.240/29",
        "216.145.216.0/24",
        "170.10.151.0/24",
        "170.10.153.0/24",
        "170.10.150.240/29",
        "170.10.152.240/29",
        "170.10.156.0/24",
        "170.10.157.0/24"
      ],
      "ipv6": []
    },
    "issues_found": [],
    "spf_valid": true,
    "has_issues": false,
    "macros_found": false,
    "ip_pass": false,
    "elapsed_ms": 431,
    "all_qualifier": "fail",
    "risk_score": 5,
    "risk_level": "low"
  }
}
```

---

## Support & Community

- 🏠 **API Home**: [SPF Validator API](https://apiverve.com/marketplace/spfvalidator?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
