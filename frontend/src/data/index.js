import iso14001Foundation from './standards/iso14001/foundation';
import iso14001Implementer from './standards/iso14001/implementer';
import iso14001InternalAuditor from './standards/iso14001/internal_auditor';
import iso14001LeadAuditor from './standards/iso14001/lead_auditor';

import iso9001Foundation from './standards/iso9001/foundation';
import iso9001Implementer from './standards/iso9001/implementer';
import iso9001InternalAuditor from './standards/iso9001/internal_auditor';
import iso9001LeadAuditor from './standards/iso9001/lead_auditor';

import iso45001Foundation from './standards/iso45001/foundation';
import iso45001Implementer from './standards/iso45001/implementer';
import iso45001InternalAuditor from './standards/iso45001/internal_auditor';
import iso45001LeadAuditor from './standards/iso45001/lead_auditor';

import fssc22000Foundation from './standards/fssc22000/foundation';
import fssc22000Implementer from './standards/fssc22000/implementer';
import fssc22000InternalAuditor from './standards/fssc22000/internal_auditor';
import fssc22000LeadAuditor from './standards/fssc22000/lead_auditor';

import iso27001Foundation from './standards/iso27001/foundation';

export const examLibrary = {
  // ISO 14001
  "14001-fnd": iso14001Foundation,
  "14001-imp": iso14001Implementer,
  "14001-ia": iso14001InternalAuditor,
  "14001-la": iso14001LeadAuditor,

  // ISO 9001
  "9001-fnd": iso9001Foundation,
  "9001-imp": iso9001Implementer,
  "9001-ia": iso9001InternalAuditor,
  "9001-la": iso9001LeadAuditor,

  // ISO 45001
  "45001-fnd": iso45001Foundation,
  "45001-imp": iso45001Implementer,
  "45001-ia": iso45001InternalAuditor,
  "45001-la": iso45001LeadAuditor,

  // FSSC 22000
  "fssc22000-fnd": fssc22000Foundation,
  "fssc22000-imp": fssc22000Implementer,
  "fssc22000-ia": fssc22000InternalAuditor,
  "fssc22000-la": fssc22000LeadAuditor,

  // ISO 27001
  "27001-fnd": iso27001Foundation
};
