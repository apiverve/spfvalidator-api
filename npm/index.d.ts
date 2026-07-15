declare module '@apiverve/spfvalidator' {
  export interface spfvalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface spfvalidatorResponse {
    status: string;
    error: string | null;
    data: SPFValidatorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SPFValidatorData {
      host:             null | string;
      hasSPFRecord:     boolean | null;
      dnsLookupsNum:    number | null;
      spfRecord:        null | string;
      spfRecordsList:   SPFRecordsList[];
      domainsExtracted: (null | string)[];
      authorizedIPS:    { [key: string]: (null | string)[] };
      issuesFound:      any[];
      spfValid:         boolean | null;
      hasIssues:        boolean | null;
      macrosFound:      boolean | null;
      ipPass:           boolean | null;
      elapsedMS:        number | null;
      allQualifier:     null | string;
      riskScore:        number | null;
      riskLevel:        null | string;
  }
  
  interface SPFRecordsList {
      origin:         null | string;
      record:         null | string;
      charsNum:       number | null;
      useMacro:       boolean | null;
      domains?:       (null | string)[];
      authorizedIPS?: AuthorizedIPS;
  }
  
  interface AuthorizedIPS {
      ipv4: (null | string)[];
  }

  export default class spfvalidatorWrapper {
    constructor(options: spfvalidatorOptions);

    execute(callback: (error: any, data: spfvalidatorResponse | null) => void): Promise<spfvalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spfvalidatorResponse | null) => void): Promise<spfvalidatorResponse>;
    execute(query?: Record<string, any>): Promise<spfvalidatorResponse>;
  }
}
