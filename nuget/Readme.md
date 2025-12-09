APIVerve.API.SPFValidator API
============

SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it’s valid and optionally whether a given IP address is authorized to send emails for that domain.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a .NET Wrapper for the [APIVerve.API.SPFValidator API](https://apiverve.com/marketplace/spfvalidator)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.SPFValidator
```

Using the Package Manager:
```
nuget install APIVerve.API.SPFValidator
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.SPFValidator
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.SPFValidator"
5. Click on the APIVerve.API.SPFValidator package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the spfvalidator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The APIVerve.API.SPFValidator API documentation is found here: [https://docs.apiverve.com/ref/spfvalidator](https://docs.apiverve.com/ref/spfvalidator).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
APIVerve.API.SPFValidator API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
using (var apiClient = new SPFValidatorAPIClient("[YOUR_API_KEY]"))
{
    var queryOptions = new SPFValidatorQueryOptions {
  domain = "myspace.com"
};
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
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
        "216.145.216.0/24"
      ]
    },
    "dns_lookups_num": 8,
    "domains_extracted": [
      "myspace.com",
      "_netblocks.mimecast.com",
      "eu._netblocks.mimecast.com",
      "us._netblocks.mimecast.com",
      "za._netblocks.mimecast.com",
      "de._netblocks.mimecast.com",
      "au._netblocks.mimecast.com",
      "ca._netblocks.mimecast.com"
    ],
    "elapsed_ms": 1118,
    "has_issues": false,
    "has_spf_record": true,
    "host": "myspace.com",
    "ip_pass": false,
    "macros_found": false,
    "spf_record": "v=spf1 mx ip4:63.208.226.34 ip4:204.16.32.0/22 ip4:67.134.143.0/24 ip4:216.205.243.0/24 ip4:34.85.156.5/32 ip4:35.245.108.108/32 ip4:34.86.129.193/32 ip4:34.86.134.94/32 ip4:34.85.222.234/32 ip4:34.86.176.234/32 ip4:34.86.125.212/32 ip4:34.85.224.60/32 ip4:34.86.160.49/32 ip4:35.245.64.166/32 ip4:35.188.226.11/32 ip4:34.86.208.228/32 ip4:34.85.216.144/32 ip4:35.221.22.153/32 ip4:34.86.137.108/32 ip4:34.86.51.35/32 ip4:34.150.221.40/32 ip4:34.85.216.70/32 ip4:34.86.37.191/32 ip4:34.85.214.215/32 ip4:35.236.234.82/32 ip4:34.86.161.241/32 ip4:216.32.181.16 ip4:216.178.32.0/20 ip4:168.235.224.0/24 include:_netblocks.mimecast.com -all",
    "spf_records_list": [
      {
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
        },
        "chars_num": 637,
        "domains": [
          "_netblocks.mimecast.com"
        ],
        "origin": "myspace.com",
        "record": "v=spf1 mx ip4:63.208.226.34 ip4:204.16.32.0/22 ip4:67.134.143.0/24 ip4:216.205.243.0/24 ip4:34.85.156.5/32 ip4:35.245.108.108/32 ip4:34.86.129.193/32 ip4:34.86.134.94/32 ip4:34.85.222.234/32 ip4:34.86.176.234/32 ip4:34.86.125.212/32 ip4:34.85.224.60/32 ip4:34.86.160.49/32 ip4:35.245.64.166/32 ip4:35.188.226.11/32 ip4:34.86.208.228/32 ip4:34.85.216.144/32 ip4:35.221.22.153/32 ip4:34.86.137.108/32 ip4:34.86.51.35/32 ip4:34.150.221.40/32 ip4:34.85.216.70/32 ip4:34.86.37.191/32 ip4:34.85.214.215/32 ip4:35.236.234.82/32 ip4:34.86.161.241/32 ip4:216.32.181.16 ip4:216.178.32.0/20 ip4:168.235.224.0/24 include:_netblocks.mimecast.com -all",
        "use_macro": false
      },
      {
        "chars_num": 221,
        "domains": [
          "eu._netblocks.mimecast.com",
          "us._netblocks.mimecast.com",
          "za._netblocks.mimecast.com",
          "de._netblocks.mimecast.com",
          "au._netblocks.mimecast.com",
          "ca._netblocks.mimecast.com"
        ],
        "origin": "_netblocks.mimecast.com",
        "record": "v=spf1 include:eu._netblocks.mimecast.com include:us._netblocks.mimecast.com include:za._netblocks.mimecast.com include:de._netblocks.mimecast.com include:au._netblocks.mimecast.com include:ca._netblocks.mimecast.com ~all",
        "use_macro": false
      },
      {
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
        },
        "chars_num": 225,
        "origin": "eu._netblocks.mimecast.com",
        "record": "v=spf1 ip4:195.130.217.0/24 ip4:91.220.42.0/24 ip4:146.101.78.0/24 ip4:207.82.80.0/24 ip4:213.167.81.0/25 ip4:193.7.207.0/25 ip4:213.167.75.0/25 ip4:185.58.85.0/24 ip4:185.58.86.0/24 ip4:193.7.206.0/25 ip4:147.28.36.0/24 ~all",
        "use_macro": false
      },
      {
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
        },
        "chars_num": 299,
        "origin": "us._netblocks.mimecast.com",
        "record": "v=spf1 ip4:207.211.31.0/25 ip4:205.139.110.0/24 ip4:216.205.24.0/24 ip4:170.10.129.0/24 ip4:63.128.21.0/24 ip4:170.10.133.0/24 ip4:185.58.84.93/32 ip4:207.211.41.113/32 ip4:207.211.30.64/26 ip4:207.211.30.128/25 ip4:216.145.221.0/24 ip4:170.10.128.0/24 ip4:170.10.132.56/29 ip4:170.10.132.64/29 ~all",
        "use_macro": false
      },
      {
        "authorized_ips": {
          "ipv4": [
            "41.74.192.0/22",
            "41.74.200.0/23",
            "41.74.196.0/22",
            "41.74.204.0/23",
            "41.74.206.0/24"
          ]
        },
        "chars_num": 106,
        "origin": "za._netblocks.mimecast.com",
        "record": "v=spf1 ip4:41.74.192.0/22 ip4:41.74.200.0/23 ip4:41.74.196.0/22 ip4:41.74.204.0/23 ip4:41.74.206.0/24 ~all",
        "use_macro": false
      },
      {
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
            "194.104.108.21/32"
          ]
        },
        "chars_num": 201,
        "origin": "de._netblocks.mimecast.com",
        "record": "v=spf1 ip4:51.163.158.0/24 ip4:194.104.109.0/24 ip4:194.104.111.0/24 ip4:194.104.110.21/32 ip4:194.104.110.240/28 ip4:62.140.10.21/32 ip4:62.140.7.0/24 ip4:194.104.108.240/29 ip4:194.104.108.21/32 ~all",
        "use_macro": false
      },
      {
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
        },
        "chars_num": 229,
        "origin": "au._netblocks.mimecast.com",
        "record": "v=spf1 ip4:103.13.69.0/24 ip4:124.47.150.0/24 ip4:124.47.189.0/24 ip4:103.96.23.0/24 ip4:103.96.21.0/24 ip4:180.189.28.0/24 ip4:216.145.217.0/24 ip4:103.96.22.96/28 ip4:103.96.22.22/32 ip4:103.96.20.22/32 ip4:103.96.20.96/28 ~all",
        "use_macro": false
      },
      {
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
        },
        "chars_num": 160,
        "origin": "ca._netblocks.mimecast.com",
        "record": "v=spf1 ip4:170.10.145.0/24 ip4:170.10.147.0/24 ip4:170.10.144.126/32 ip4:170.10.146.126/32 ip4:170.10.144.240/29 ip4:170.10.146.240/29 ip4:216.145.216.0/24 ~all",
        "use_macro": false
      }
    ],
    "spf_valid": true
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
