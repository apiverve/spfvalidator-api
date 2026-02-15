using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SPFValidator
{
    /// <summary>
    /// Query options for the SPF Validator API
    /// </summary>
    public class SPFValidatorQueryOptions
    {
        /// <summary>
        /// The domain to validate the SPF record for
        /// </summary>
        [JsonProperty("domain")]
        public string Domain { get; set; }
    }
}
