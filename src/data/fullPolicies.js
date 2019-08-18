const fullPolicies = [
    {
      "Policy #": "1.01.05",
      "Brand Drug Name": "",
      "Full Policy": "Ultrasound Accelerated Fracture Healing Device",
      "CPT": 20979,
      "HCPCS": "E0760",
      "Comments for Procedure codes": "",
      "ICD10": "S42.00xA-S42.92xA, S49.00xA-S49.199A, S52.00xA-S52.92xA, S59.00xA-S59.299A, S62.00xA-S62.92xA, S72.00xA-S72.92xA, S79.00xA-S79.199A, S82.00xA-S82.92xA, S89.00xA-S89.399A, S92.00xA-S92.919A, M80.M84",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.09",
      "Brand Drug Name": "",
      "Full Policy": "Transcutaneous Electrical Nerve Stimulation",
      "CPT": 64550,
      "HCPCS": "A4595, A4630, E0720, E0730, E0731",
      "Comments for Procedure codes": "",
      "ICD10": "G89.11, G89.12, G89.18, G89.21, G89.22, G89.28, G89.29, G89.3, G89.4, M25.50-M25.579, M54.10-M54.18, M54.2, M54.30-M54.32, M54.40-M54.42, M54.5, M54.6, M54.81, M54.89, M54.9, M79.1, M79.2, R52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.15",
      "Brand Drug Name": "",
      "Full Policy": "Oscillatory Devices for the Treatment of Cystic Fibrosis and Other Respiratory Conditions",
      "CPT": "No CPT",
      "HCPCS": "A7025, A7026, E0481, E0483, E0484, S8185",
      "Comments for Procedure codes": "",
      "ICD10": "E84.0, E84.11, E84.19, E84.8, E84.9, J47.1, J47.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.17",
      "Brand Drug Name": "",
      "Full Policy": "Pelvic Floor Stimulation as a Treatment of Urinary and Fecal Incontinence",
      "CPT": "97014, 97032",
      "HCPCS": "E0740, G0283",
      "Comments for Procedure codes": "",
      "ICD10": "F98.0, F98.1, N39.3, N39.41-N39.46, N39.490, N39.498",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.18",
      "Brand Drug Name": "",
      "Full Policy": "Pneumatic Compression Pumps for Treatment of Lymphedema and Venous Ulcers",
      "CPT": "No CPT",
      "HCPCS": "E0650, E0655, E0660, E0665, E0666, E0651, E0656, E0657, E0667, E0668, E0669, E0670, E0652, E0671, E0672, E0673",
      "Comments for Procedure codes": "",
      "ICD10": "I89.0, I97.2, Q82.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.23",
      "Brand Drug Name": "",
      "Full Policy": "Transtympanic Micropressure Applications as a Treatment of Meniere Disease",
      "CPT": "No CPT",
      "HCPCS": "E2120, A4638",
      "Comments for Procedure codes": "",
      "ICD10": "H81.01-H81.09",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.24",
      "Brand Drug Name": "",
      "Full Policy": "Interferential Current Stimulation",
      "CPT": "64550, 97014, 97032",
      "HCPCS": "G0283, S8130, S8131",
      "Comments for Procedure codes": "",
      "ICD10": "G56.40-G56.42, G57.70-G57.72, G89.0-G89.4, G90.50-G90.59, M25.50-M25.579, M54.00-M54.9, M79.60-M79.676, R52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.26",
      "Brand Drug Name": "",
      "Full Policy": "Cooling Devices Used in the Outpatient Setting",
      "CPT": "No CPT",
      "HCPCS": "E0218, E0236",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.27",
      "Brand Drug Name": "",
      "Full Policy": "Electrical Stimulation for the Treatment of Arthritis",
      "CPT": "No CPT",
      "HCPCS": "E0762",
      "Comments for Procedure codes": "",
      "ICD10": "M05.00-M05.9, M06.00-M06.9, M08.00-M08.99, M15.0-M19.93",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.28",
      "Brand Drug Name": "",
      "Full Policy": "Postsurgical Home Use of Limb Compression Devices for Venous Thromboembolism Prophylaxis",
      "CPT": "No CPT",
      "HCPCS": "E0650, E0651, E0652, E0655, E0656, E0657, E0660, E0665, E0666, E0667, E0668, E0669, E0670, E0671, E0672, E0673, E0676",
      "Comments for Procedure codes": "",
      "ICD10": "M05.051-M05.059; M05.061-M05.69;M05.151-M05.159; M05.161-M05.169; M05.251-M05.259; M05.261-M05.269; M05.351-M05.359; M05.361-M05.369; M05.451-M05.459; M05.561-M05.469; M05.551-M05.559; M05.561-M05.659; M05.651-M05.659; M05.661-M05.669; M05.751-M05.759; M05.761-M05.769; M05.851-M05.859; M05.861-M05.869; M06.051-M06.059; M06.061-M06.069",
      "Comments for ICD10's": "Continued on next row"
    },
    {
      "Policy #": "1.01.28",
      "Brand Drug Name": "",
      "Full Policy": "Postsurgical Home Use of Limb Compression Devices for Venous Thromboembolism Prophylaxis",
      "CPT": "No CPT",
      "HCPCS": "",
      "Comments for Procedure codes": "",
      "ICD10": "M06.851-M06.859; M06.861-M06.869; M08.051-M08.059; M08.061-M08.069; M08.251-M08.259; M08.261-M08.269; M08.451-M08.459; M08.461-M08.469; M08.851-M08.859; M08.861-M08.869; M08.951-M08.959; M08.961-M08.969; M12.551-M12.559; M12.561-M12.569; M15.0-M15.9; M16.0-M16.9; M17.0-M17.9; M80.051-M80.059; M80.851-M80.859; M84.451-M84.453; M84.459;  M84.650-M84.653; M84.659; S72.001A-S72.399S",
      "Comments for ICD10's": "Other codes shown above"
    },
    {
      "Policy #": "1.01.29",
      "Brand Drug Name": "",
      "Full Policy": "Tumor Treating Fields Therapy",
      "CPT": "No CPT",
      "HCPCS": "E0766, A4555",
      "Comments for Procedure codes": "",
      "ICD10": "C71.0-C71.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.01.30",
      "Brand Drug Name": "",
      "Full Policy": "Artificial Pancreas Device Systems",
      "CPT": "No CPT",
      "HCPCS": "S1034, S1035, S1036, S1037",
      "Comments for Procedure codes": "",
      "ICD10": "E10.10-E13.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.03.04",
      "Brand Drug Name": "",
      "Full Policy": "Powered Exoskeleton for Ambulation in Patients With Lower-Limb Disabilities",
      "CPT": "No CPT",
      "HCPCS": "E1399",
      "Comments for Procedure codes": "",
      "ICD10": "G12.21, G35, G61.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.03.05",
      "Brand Drug Name": "",
      "Full Policy": "Patient-Controlled End of Range Motion Stretching Devices",
      "CPT": "No CPT",
      "HCPCS": "E1811, E1816, E1818, E1831, E1841",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.04.04",
      "Brand Drug Name": "",
      "Full Policy": "Myoelectric Prosthetic and Orthotic Components for the Upper Limb",
      "CPT": "No CPT",
      "HCPCS": "L6026, L6880, L6925, L6935, L6945, L6955, L6965, L6975, L7007, L7008, L7009, L7045, L7190, L7191, L8701, L8702",
      "Comments for Procedure codes": "",
      "ICD10": "Z44.001-Z44.009, Z44.011-Z44.019, Z44.021-Z44.029",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "1.04.05",
      "Brand Drug Name": "",
      "Full Policy": "Microprocessor-Controlled Prostheses for the Lower Limb",
      "CPT": "No CPT",
      "HCPCS": "L5856, L5857, L5858, L5973",
      "Comments for Procedure codes": "",
      "ICD10": "S78.011-S78.929, Z96.651-Z96.659",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.04",
      "Brand Drug Name": "",
      "Full Policy": "Hyperbaric Oxygen Therapy",
      "CPT": "99183, G0277",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "A48.0, D62, E086.21, E086.22, E096.21, E096.22, E10.621, E106.22, E11.621, E11.622,  E13.621, E136.22, K52.0, M27.2, M46.20-M86.28, M86.40-M86.69, T58.01xA-T58.94xD, T79.0xxA-T79.0xxD, T79.6xxA-T79.6xxD",
      "Comments for ICD10's": "(Note: Use additional code to identify site of ulcer L97.4-, L97.5-); (Note: sequelae due to exposure to ionizing radiation would also be reported, when applicable, using code W88.0xxS, W88.1xxS or W88.8xxS depending on the radiation source); (Note: 7th character “S” for sequelae is defined as after the acute stage has ended so codes ending in S would not be applicable to acute poisoning)"
    },
    {
      "Policy #": "2.01.18",
      "Brand Drug Name": "",
      "Full Policy": "Diagnosis and Medical Management of Obstructive Sleep Apnea Syndrome",
      "CPT": "94660, 94762, 95800, 95801, 95806, 95807, 98808, 95810, 95811, 95782, 95783",
      "HCPCS": "A7027, A7028, A7029, A7034, A7035, A7036, A7037, A7038, A7039, E0470, E0471, E0485, E0486, E0561, E0562, E0601, G0398, G0399, G0400",
      "Comments for Procedure codes": "",
      "ICD10": "G47.33, R06.81, R40.0, G47.30, G47.8, G47.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.26",
      "Brand Drug Name": "",
      "Full Policy": "Prolotherapy",
      "CPT": "M0076",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.39",
      "Brand Drug Name": "",
      "Full Policy": "Quantitative Sensory Testing",
      "CPT": "0106T, 0107T, 0108T, 0109T, 0110T",
      "HCPCS": "G0255",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.40",
      "Brand Drug Name": "",
      "Full Policy": "Extracorporeal Shock Wave Treatment for Plantar Fasciitis and Other Musculoskeletal Conditions",
      "CPT": "0101T, 0102T, 28890",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M72.2, M75.20-M75.22, M75.30-M75.32, M77.00-M77.02, M77.10-M77.12, M84.311-M843.8, M87.051-M87.059, S322xxK-S32.9xxK, S42.00xK-S42.92xK, S49.00xK-S49.199K, S52.00xK-S52.92xN",
      "Comments for ICD10's": "Fracture nonunion codes for the appendicular skeleton – 7th digit“K” is subsequent encounter for nonunion (in forearm, femur, lower leg & ankle fractures 7th digits “M” and “N” are also nonunion for certain types of open fractures – in fractures of the shoulder,"
    },
    {
      "Policy #": "2.01.50",
      "Brand Drug Name": "",
      "Full Policy": "Transcranial Magnetic Stimulation as a Treatment of Depression and Other Psychiatric/Neurological Disorders",
      "CPT": "90867, 90868, 90869",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F32.0-F32.9, F33.0-F33.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.54",
      "Brand Drug Name": "",
      "Full Policy": "Endovascular Procedures for Intracranial Arterial Disease (Atherosclerosis and Aneurysms)",
      "CPT": "36221, 36223, 36224, 36227, 36228, 61624, 61630, 61635, 61645",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I63.00-I63.9, I66.01-I66.9, I67.0-I67.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.56",
      "Brand Drug Name": "",
      "Full Policy": "Low-Level Laser Therapy",
      "CPT": "0552T",
      "HCPCS": "S8948",
      "Comments for Procedure codes": "New code eff 07/01/2019, 97026 removed not specific to policy",
      "ICD10": "G56.0-G56.02, L98.411-L98.499, M05.00-M05.9, M06.00-M06.9, M17.0,-M17.9, M25.521-M25.529, M26.60-M26.69, M54.5, M75.40-M75.42, M76.60-M76.72, M79.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.58",
      "Brand Drug Name": "",
      "Full Policy": "Transanal Radiofrequency Treatment of Fecal Incontinence",
      "CPT": 46999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "R15.0-R15.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.68",
      "Brand Drug Name": "",
      "Full Policy": "Laboratory Tests for Heart & Kidney Transplant Rejection",
      "CPT": "0085T, 81595, 93505, 0055U, 0087U, 0088U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019",
      "ICD10": "T86.20-T86.298, Z48.21, Z94.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.71",
      "Brand Drug Name": "",
      "Full Policy": "Nonpharmacologic Treatment of Rosacea",
      "CPT": "15780, 15781, 15782, 15783, 15788, 15789, 15792, 15793, 17000, 17003, 17004, 17106, 17107, 17108, 30117, 30118",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "L71.0-L71.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.73",
      "Brand Drug Name": "",
      "Full Policy": "Actigraphy",
      "CPT": 95803,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F51.01-F51.9, G25.81, G47.00-G47.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.77",
      "Brand Drug Name": "",
      "Full Policy": "Automated Point-of-Care Nerve ConductionTests",
      "CPT": "95905, 95999",
      "HCPCS": "G0255",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.79",
      "Brand Drug Name": "",
      "Full Policy": "Non-Contact Ultrasound Treatment for Wounds",
      "CPT": 97610,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "E08.621, E08.622, E09.621, E09.622, E10.621, E10.622, E11.621, E11.622, E13.621, E13.622, I83.001-I83.029, I83.201-I83.229, L00-L08.9, L89.00-L89.95, L97.101-L97.929, L98.411-L98.499, L99",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.81",
      "Brand Drug Name": "",
      "Full Policy": "Ingestible pH and Pressure Capsule",
      "CPT": 91112,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E08.43, E09.43, E10.43, E11.43, E13.43, K30, K31.84, K31.9, K59.00-K59.09",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.82",
      "Brand Drug Name": "",
      "Full Policy": "Bioimpedance Devices for Detection and Management of Lymphedema",
      "CPT": 93702,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "I97.2, Z90.10-Z90.13",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.84",
      "Brand Drug Name": "",
      "Full Policy": "Chromoendoscopy as an Adjunct to Colonoscopy",
      "CPT": 44799,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.87",
      "Brand Drug Name": "",
      "Full Policy": "Confocal Laser Endomicroscopy",
      "CPT": "43206, 43252, 88375, 0397T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K22.70-K22.719, Z13.810, Z13.811, Z13.83",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.89",
      "Brand Drug Name": "",
      "Full Policy": "Laser Treatment of Onychomycosis",
      "CPT": "17999, 96999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "B35.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.90",
      "Brand Drug Name": "",
      "Full Policy": "Navigated Transcranial Magnetic Stimulation",
      "CPT": 64999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.91",
      "Brand Drug Name": "",
      "Full Policy": "Peroral Endoscopic Myotomy for Treatment of Esophageal Achalasia",
      "CPT": 43499,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K22.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.01.96",
      "Brand Drug Name": "",
      "Full Policy": "Autonomic Nervous System Testing",
      "CPT": "95921, 95922, 95923, 95924, 95943",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E10.40-E10.49, E85.1;E85.8, G61.0-G61.9, G90.01-G90.9, M32.0-M32.9, M35.00-M35.09, R55",
      "Comments for ICD10's": "Any of a large number of diagnosis codes might apply to this policy, the following is not a complete list"
    },
    {
      "Policy #": "2.01.99",
      "Brand Drug Name": "",
      "Full Policy": "Polysomography for Non-Respiratory Sleep Disorders",
      "CPT": "95805, 95808, 95810, 95811, 95782, 95783",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G47.411, G47.419, G47.50-G47.59, G47.61",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.02.08",
      "Brand Drug Name": "",
      "Full Policy": "Ambulatory Event Monitors and Mobile Cardiac Outpatient Telemetry",
      "CPT": "33285, 33286, 93228, 93229, 93268, 93270, 93271, 93272, 93299, 0295T, 0296T, 0297T, 0298T, 0497T, 0498T",
      "HCPCS": "E0616, C1764",
      "Comments for Procedure codes": "code description change 01/01/2019",
      "ICD10": "I44.0-I44.7, I45.0-I45.9, I47.0-I47.9, I48.0-I48.1, I49.01-I49.9, I63.9, R00.2, R42, R55",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.02.10",
      "Brand Drug Name": "",
      "Full Policy": "Biventricular Pacemakers (Cardiac Resynchronization Therapy) for Treamtent of Heart Failure",
      "CPT": "33202, 33203, 33207, 33217, 33220, 33222, 33223, 33226, 33228, 33228, 33229, 33230, 33231, 33230, 33231, 33232, 33233, 33238, 33241, 33243, 33243, 33244, 33249, 33263, 33264 0515T-0522T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I50.20-I50.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.02.15",
      "Brand Drug Name": "",
      "Full Policy": "Wearable Cardioverter-Defibrillators",
      "CPT": "93292, 93745",
      "HCPCS": "K0606, K0607, K0608, K0609",
      "Comments for Procedure codes": "",
      "ICD10": "I42.0-I43, I47.0-I47.9, I49.01-I49.02, I50.1-I50.9, Z86.74",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.02.18",
      "Brand Drug Name": "",
      "Full Policy": "Progenitor Cell Therapy for Treatment of Damaged Myocardium Due to Ischemia",
      "CPT": "38206, 38232, 38230, 38240, 38241",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.02.30",
      "Brand Drug Name": "",
      "Full Policy": "Transcatheter Mitral Valve Repair",
      "CPT": "0345T, 0544T, 33418, 33419",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.03.01",
      "Brand Drug Name": "",
      "Full Policy": "In Vitro Chemoresistance and Chemosensitivity Assays",
      "CPT": "81535, 81536, 88358, 88305, 88104, 87230, 88313, 89050",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C00.0-C96.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.07",
      "Brand Drug Name": "",
      "Full Policy": "Urinary Biomarkers for Cancer Screening, Diagnosis, and Surveillance",
      "CPT": "86294, 86316, 86386, 88120, 88121, 0012M, 0013M, 0002U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C67.0-C67.9, D09.0, D49.4, D49.4, R31.9, Z85.51",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.08",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Lynch Syndrome and Other Inherited Colon Cancer Syndromes",
      "CPT": "81201, 81202, 81203, 81210, 81288, 81292, 81293, 81294, 81295, 81296, 82197, 81298, 81299, 81300, 81301, 81317, 81318, 81319, 81403, 96040, 0101U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "0101U: New code eff 07/01/2019",
      "ICD10": "Z85.030-Z85.038, Z85.040-Z85.048, Z80.0, Z31.5, C18.0-C18.9, C19, C20, D12.0-D12.9, D01.0-D01.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.10",
      "Brand Drug Name": "",
      "Full Policy": "Identification of Microorganisms Using Nucleic Acid Probes",
      "CPT": "87480, 87481, 87482, 0068U, 0086U, 0096U, 0097U, 0098U, 0099U, 0100U, 87483, 87485, 87486, 87487, 87490, 87491, 87492, 87493, 87495, 87496, 87497, 87498, 87500, 87501, 87502, 87503, 87505, 87506, 87507, 87510, 87511, 87512, 87516, 87517, 87520, 87521, 87522, 87525, 87526, 87527, 87528, 87529, 87530, 87531, 87532, 87533, 87534, 87535, 87536, 87537, 87538, 87539, 87540, 87541, 87542, 87550, 87551, 87552, 87555, 87556, 87557, 87560, 87561, 87562, 87580, 87581, 87582, 87590, 87591, 87592, 87623, 87624, 87625, 87631, 87632, 87633, 87634, 87640, 87641, 87650, 87651, 87652, 87653, 87660, 87661,",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019",
      "ICD10": "A04.71-A04.72, A15.0-A19.9, A30.0-A30.9, A31.0-A31.9, A48.1-A48.2, A54.00-A54.09, A59.00-A59.09, A74.0-A74.89, A74.9, B00.0-B00.9, B16.0-B16.9, B17.10-B17.11, B18.0-B18.1, B18.2, B19.10-B19.11-B19.20-B19.21, B20, B25.0-B25.9, B97.7, J09.0X1-J11.89, P35.0-P35.9, Z21, Z36",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.100",
      "Brand Drug Name": "",
      "Full Policy": "Cardiovascular Risk Panels",
      "CPT": "81291, 82465, 82652, 83090, 83698, 83718, 83721, 83722, 83880, 84478, 86141, 81599, 0052U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No Specific codes--CPTs for components only",
      "ICD10": "Z13.6, Z82.41, Z82.49",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.101",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Li-Fraumeni Syndrome",
      "CPT": "81404, 81405, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Z15.01",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.102",
      "Brand Drug Name": "",
      "Full Policy": "Whole Exome and Whole Genome Sequencing for Diagnosis of Genetic Disorders",
      "CPT": "81415, 81416, 81417, 81425, 81426, 81427, 0036U, 0094U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.103",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Macular Degeneration",
      "CPT": "81401, 81405, 81408, 81479, 81599",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "H35.30, H35.3110-H35.3194, H35.3210-H35.3293, Z13.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.105",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Facioscapulohumeral Muscular Dystrophy",
      "CPT": 81404,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G71.02",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.106",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for CHARGE Syndrome",
      "CPT": 81407,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Q99.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.108",
      "Brand Drug Name": "",
      "Full Policy": "Noninvasive Fetal RHD Genotyping Using Cell-Free Fetal DNA",
      "CPT": 81403,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "O36.0110- O36.0199, Z31.82",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.109",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Epilepsy",
      "CPT": "81401, 81403, 81404, 81405, 81406, 81407",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G40.001-G40.919",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.110",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Diagnosis and Management of Mental Health Conditions",
      "CPT": "81225, 81226, 81291, 81479, 0032U, 0033U, 0070U-0076U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "81401 (gene reference deleted 12/31/17)",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.111",
      "Brand Drug Name": "",
      "Full Policy": "Gene Expression Profiling and Protein Biomarkers for Prostate Cancer Management",
      "CPT": "81541, 81599, 0005U, 0047U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C61",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.113",
      "Brand Drug Name": "",
      "Full Policy": "Analysis of MGMT Promoter Methylation in Malignant Gliomas",
      "CPT": 81287,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C71.0-C71.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.114",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Dilated Cardiomyopathy",
      "CPT": "81403, 81405, 81406, 81407, 81439, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I42.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.115",
      "Brand Drug Name": "",
      "Full Policy": "Expanded Molecular Panel Testing of Cancers to Identify Targeted Therapies",
      "CPT": "81120, 81121, 81162-81167, 81206, 81207, 81208, 81210, 81212, 81215, 81216, 81217, 81218, 81233, 81235, 81237, 81261, 81262, 81263, 81264, 81271, 81272, 81273, 81274, 81275, 81276, 81287, 81280, 81292, 81293, 81294, 81295, 81296, 81297, 81298, 81299, 81300, 81301, 81305, 81310, 81311, 81313, 81314, 81315, 81316, 81317, 81318, 81319, 81320, 81321, 81327, 81334, 81340, 81341, 81345, 81400, 81401, 81402, 81403, 81404, 81405, 81406, 81407, 81408, 81432, 81433, 81435, 81436, 81437, 81437, 81445, 81450, 81455, 81479, 0037U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific code may report any cancer related code with 81200-81408  or with 81479",
      "ICD10": "C00-D49",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.117",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing of Mitochondrial Disorders",
      "CPT": "81401, 81403,81404, 81405, 81406, 81440, 81479, 81460, 81465",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E88.40, E88.41, E88.42, E88.49, G31.82, H49.811-H49.819",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.119",
      "Brand Drug Name": "",
      "Full Policy": "Multi-Biomarker Disease Activity Blood Test for Rheumatoid Arthritis",
      "CPT": 81490,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M05.00-M06.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.120",
      "Brand Drug Name": "",
      "Full Policy": "Gene Expression Profiling for Uveal Melanoma",
      "CPT": "81599, 84999, 0081U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C69.80-C69.82",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.122",
      "Brand Drug Name": "",
      "Full Policy": "Chromosomal Microarray Testing for the Evaluation of Pregnancy Loss",
      "CPT": "81228, 81229, 81258, 81259, 81269,88262, 88263, 88271",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes:",
      "ICD10": "N96, O26.20-O26.23",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.123",
      "Brand Drug Name": "",
      "Full Policy": "Serum Biomarker Panel Testing for Systemic Lupus Erythematosus and Other Connective Tissue Diseases",
      "CPT": "83520, 86038, 86039, 86146, 86147, 86200, 86225, 86235, 86376, 86800, 88184, 88185, 88187, 88188, 84999, 81599, 0039U, 0062U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "D89.82, D89.89, D89.9, L40.50-L40.59, M06.4, M12.80-M12.89, M12.9, M19.90-M19.93, M32.0-M32.9, M35.9, M79.0, M79.1, R53.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.124",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for FLT3, NPM1, and CEBPA Variants in Cytogenetically Normal Acute Myeloid Leukemia",
      "CPT": "81218, 81245, 81246, 81310, 0023U, 0046U, 0049U, 0050U, 0056U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C92.00-C92.02, C92.60-C92.62, C92.A0-C92.A2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.125",
      "Brand Drug Name": "",
      "Full Policy": "Proteomic Testing for Systemic Therapy in Non-Small-Cell Lung Cancer",
      "CPT": "81235, 81538",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C34.10-C34.92",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.127",
      "Brand Drug Name": "",
      "Full Policy": "Multitarget Polymerase Chain Reaction Testing for Diagnosis of Baterial Vaginosis",
      "CPT": "87491, 87591, 87481, 87512, 87661, 87999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "A54.02, A56.02, B37.3, N76.0-N76.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.128",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Fanconi Anemia",
      "CPT": "81242, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New Policy eff 04/01/2019",
      "ICD10": "D61.09  D61.89  D61.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.129",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Marfan Syndrome, Thoracic Aortic Aneurysms and Dissections, and Related Disorders",
      "CPT": "81401, 81405, 81408, 81410, 81411",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Z82.79",
      "Comments for ICD10's": "Multiple codes might possibly be used for signs and symptoms of a connective tissue disorder"
    },
    {
      "Policy #": "2.04.130",
      "Brand Drug Name": "",
      "Full Policy": "ST2 Assay for Chronic Heart Failure and Heart Transplant Rejection",
      "CPT": "83006, 0055U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I50.1-I50.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.131",
      "Brand Drug Name": "",
      "Full Policy": "Pharmacogenetic Testing for Pain Management",
      "CPT": "81225, 81226, 81227, 81291, 81401, 81479, 0028U, 0032U, 0070U-0076U, 0078U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G89.0-G89.4, R52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.132",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Limb-Girdle Muscular Dystrophies",
      "CPT": "81400, 81404, 81405, 81406, 81408, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G71.0, Z13.71, Z31.430, Z31.440, Z82.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.136",
      "Brand Drug Name": "",
      "Full Policy": "Nutrient Nutritional Panel Testing",
      "CPT": "82128, 82136, 82139, 84999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Tests in the panel that have specific CPT codes 82746, 83735, 83785, 84590, and 84630",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.137",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Neurofibromatosis",
      "CPT": "81405, 81406, 81408",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Q85.00-Q85.09",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.14",
      "Brand Drug Name": "",
      "Full Policy": "Cerebrospinal Fluid and Urinary Biomarkers of Alzheimer Disease",
      "CPT": "83520, 81099, 86849",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F03, G30.0-G30.9, G31.1, R41.0, R41.81, Z13.858",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.140",
      "Brand Drug Name": "",
      "Full Policy": "Proteogenomic Testing in Patients with Cancer",
      "CPT": 81479,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific code for this test.",
      "ICD10": "C00.0-C96.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.141",
      "Brand Drug Name": "",
      "Full Policy": "Circulating Tumor DNA and Circulating Tumor Cells for Cancer Management (Liquid Biopsy)",
      "CPT": "86152, 86153, 0011M, 0091U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019; No specific code may be reported with 81161-81355, 81400-81408",
      "ICD10": "C00.0-C96.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.143",
      "Brand Drug Name": "",
      "Full Policy": "Circulating Tumor DNA Management of Non-Small-Cell Lung Cancer (Liquid Biopsy)",
      "CPT": "81210, 81235, 86152, 86153",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Panels that include EGFR Gene 81445, 81455",
      "ICD10": "C00.0-C96.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.146",
      "Brand Drug Name": "",
      "Full Policy": "Gene Expression Profiling for Cutaneous Melanoma",
      "CPT": "81479, 81599, 84999, 0081U, 0089U, 0090U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New codes eff 07/01/2019",
      "ICD10": "Z12.83, Z80.8, C43.0-C43.9, C4A.0-C4A.9, C44.0-C44.99, D03.0-D03.9, D04.0-D04.9, L81.0-L81.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.147",
      "Brand Drug Name": "",
      "Full Policy": "Next-Generation Sequencing for the Assessment of Measurable Residual Disease",
      "CPT": "81479, 81599",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C81.00-C96.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.19",
      "Brand Drug Name": "",
      "Full Policy": "Pharmacogenomic and Metabolite Markers for Patients Treated with Thiopurines",
      "CPT": "81401, 81335, 0034U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K50.0-K50.019, K51.00-K51.319",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.29",
      "Brand Drug Name": "",
      "Full Policy": "Analysis of Human DNA in Stool Samples as a Technique for Colorectal Cancer Screening",
      "CPT": 81528,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C18.0-C18.9, C19, Z12.10-Z12.13, Z15.09, Z80.00",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.32",
      "Brand Drug Name": "",
      "Full Policy": "Measurement of Lipoprotein-Associated Phospholipase A2 (Lp-PLA2) in the Assessment of Cardiovascular Risk",
      "CPT": "83698, 0052U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.33",
      "Brand Drug Name": "",
      "Full Policy": "Genetic and Protein Biomarkers for the Diagnosis and Cancer Risk Assessment of Prostate Cancer",
      "CPT": "81313, 81539, 81551, 0005U, 0021U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C61, Z12.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.36",
      "Brand Drug Name": "",
      "Full Policy": "Assays of Genetic Expression in Tumor Tissue as a Technique to Determine Prognosis in Patients with Breast Cancer",
      "CPT": "81518, 81519, 81520, 81521, 0045U",
      "HCPCS": "S3854",
      "Comments for Procedure codes": "",
      "ICD10": "C50.011-C50.929, D05.00-D05.92, Z17.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.38",
      "Brand Drug Name": "",
      "Full Policy": "Cytochrome P450 Genotype Guided Treatment Strategy",
      "CPT": "81225, 81226, 81227, 81230, 81231, 81402, 81404, 81405, 0029U, 0031U, 0070U-0076U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I20.0, I21.01-I22.9, I24.1, I25.110, I63.50-I63.549, I66.01-I66.9, I73",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.41",
      "Brand Drug Name": "",
      "Full Policy": "Noninvasive Techniques for the Evaluation and Monitoring of Patients With Chronic Liver Disease",
      "CPT": "81596, 0002M, 0003M, 76391, 76981, 76982, 76983, 91200",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "K70.0-K77",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.43",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Cardiac Ion Channelopathies",
      "CPT": "81403, 81405, 81406, 81407, 81408, 81413, 81414",
      "HCPCS": "S3861",
      "Comments for Procedure codes": "",
      "ICD10": "I45.81, Z13.6, Z13.79",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.44",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Familial Cutaneous Malignant Melanoma",
      "CPT": "81404, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Z12.83, Z80.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.45",
      "Brand Drug Name": "",
      "Full Policy": "Molecular Analysis for Targeted Therapy of Non-Small-Cell Lung Cancer",
      "CPT": "81210, 81235, 81275, 81276, 81404, 81405, 81479, 88342, 88365",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C34.0-C34.92",
      "Comments for ICD10's": "No specific diagnosis for Non-Small Cell Lung Cancer"
    },
    {
      "Policy #": "2.04.48",
      "Brand Drug Name": "",
      "Full Policy": "Genotype-Guided Warfarin Dosing",
      "CPT": "81227, 81355, 0030U",
      "HCPCS": "G9143",
      "Comments for Procedure codes": "",
      "ICD10": "I48.0, Z86.71, Z86.72",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.49",
      "Brand Drug Name": "",
      "Full Policy": "Laboratory Testing for HIV Tropism",
      "CPT": 87999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "B20",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.51",
      "Brand Drug Name": "",
      "Full Policy": "Genotype-Guided Tamoxifen Treatment",
      "CPT": 81226,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "0028U Deleted eff 10/2018",
      "ICD10": "C50.011-C50.929, C79.81, D05.01-D05.99, D07.30-D07.39, Z13.71-Z13.79, Z85.3, Z80.3",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.52",
      "Brand Drug Name": "",
      "Full Policy": "Molecular Testing for the Management of Pancreatic Cysts, Barrett Esophagus, and Solid Pancreatic Lesions",
      "CPT": "84999, 89240",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.53",
      "Brand Drug Name": "",
      "Full Policy": "KRAS, NRAS, and BRAF Variant Analysis in Metastatic Colorectal Cancer",
      "CPT": "81210, 81275, 81276, 81311, 88363, 0069U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C18.0-C18.9, C19, C20,C78.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.54",
      "Brand Drug Name": "",
      "Full Policy": "Gene Expression‒Based Assays for Cancers of Unknown Primary",
      "CPT": "81504, 81540, 81479, 81599",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C79.9, C80.0, C80.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.56",
      "Brand Drug Name": "",
      "Full Policy": "Immune Cell Function Assay",
      "CPT": 86352,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G56.0-G56.02 , L98.411-L98.499, M05.00-M05.9, , M06.00-M06.9, M17.0-M17.9, M25.521-M25.529, M26.60-M26.69, M54.5, M75.40-M75.42, M76.60-M76.72, M79.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.59",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Developmental Delay/Intellectual Disability, Autism Spectrum Disorder, and Congenital Anomalies",
      "CPT": "81228, 81229, 81470, 81471, 81479",
      "HCPCS": "S3870",
      "Comments for Procedure codes": "",
      "ICD10": "F84.0-F84.9, F80.0-F80.9, F81.0-F81.9, F82, F88, F89, H93.25, R48.0, F70-F79",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.60",
      "Brand Drug Name": "",
      "Full Policy": "JAK2, MPL, and CALR Testing for Myeloproliferative Neoplasms",
      "CPT": "81219, 81270, 81402, 81403, 0017U, 0027U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C96.2, C92.10-C92.12, D45, D47.3, D47.4",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.61",
      "Brand Drug Name": "",
      "Full Policy": "Multigene Expression Assay for Predicting Recurrence in Colon Cancer",
      "CPT": "81525, 81599, 84999, 88299",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C18.0-C18.9, C19, Z85.030, Z85.038",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.62",
      "Brand Drug Name": "",
      "Full Policy": "Multimarker Serum Testing Related to Ovarian Cancer",
      "CPT": "81500, 81503, 0003U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D27.0-D27.9, D39.10-D39.12, R19.01, R19.02",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.66",
      "Brand Drug Name": "",
      "Full Policy": "Serum Biomarker Human Epididymis Protein 4",
      "CPT": "86305, 81500",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.68",
      "Brand Drug Name": "",
      "Full Policy": "Laboratory and Genetic Testing for Use of 5-Fluorouracil in Patients with Cancer",
      "CPT": "81232, 81346",
      "HCPCS": "S3722",
      "Comments for Procedure codes": "",
      "ICD10": "C18.0-C18.9, C19",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.69",
      "Brand Drug Name": "",
      "Full Policy": "Fecal Calprotectin Testing",
      "CPT": 83993,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.70",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Lipoprotein(a) Variant(s) as a Decision Aid for Aspirin Treatment",
      "CPT": 81479,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.72",
      "Brand Drug Name": "",
      "Full Policy": "Gene Expression Testing in the Evaluation of Patients With Stable Ischemic Heart Disease",
      "CPT": "81493, 81599",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Z15.89, Z13.6",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.73",
      "Brand Drug Name": "",
      "Full Policy": "Intracellular Micronutrient Analysis",
      "CPT": "84590, 82310, 82575, 84591, 84999, 86353, 88348, 0038U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.74",
      "Brand Drug Name": "",
      "Full Policy": "DNA-Based Testing for Adolescent Idiopathic Scoliosis",
      "CPT": "0004M",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "See CPT Appendix \"O",
      "ICD10": "M41.122-M41.129",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.75",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing of CADASIL Syndrome",
      "CPT": 81406,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.76",
      "Brand Drug Name": "",
      "Full Policy": "Quantitative Assay for Measurement of HER2 Total Protein Expression and HER2 Dimers",
      "CPT": "81479, 84999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.77",
      "Brand Drug Name": "",
      "Full Policy": "BRAF Gene Variant Testing to Select Melanoma or Glioma Patients for Targeted Therapy",
      "CPT": 81210,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C43.0-C43.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.78",
      "Brand Drug Name": "",
      "Full Policy": "Molecular Markers in Fine Needle Aspirates of the Thyroid",
      "CPT": "81445, 81545, 0018U, 0026U, 81345, 81479, 81599",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C73, D44.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.79",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Alpha-1 Antitrypsin Deficiency",
      "CPT": 81332,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E88.01",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.80",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Hereditary Hemochromatosis",
      "CPT": 81256,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E83.10, E83.110-E83.119, Z83.49",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.81",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Rett Syndrome",
      "CPT": "81302, 81303, 81304, 81404, 81405, 81406, 81470, 81471",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F84.2, Z13.4",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.82",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Inherited Thrombophilia",
      "CPT": "81240, 81241, 81291, 81400, 81404, 81405, 81406, 81470, 81471",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D68.51, D68.52, D68.59, D68.61-D68.69",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.83",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for FMR1 Variants (Including Fragile X Syndrome)",
      "CPT": "81243, 81244",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F70-F79, F80.0-F80.9, F82, F84.0-F84.9, Z31.430, Z31.440, Z81.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.84",
      "Brand Drug Name": "",
      "Full Policy": "Measurement of Serum Antibodies to Infliximab and Adalimumab",
      "CPT": 84999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.85",
      "Brand Drug Name": "",
      "Full Policy": "BCR-ABL1 Testing in Chronic Myelogenous Leukemia and Acute Lymphoblastic Leukemia",
      "CPT": "81170, 81206, 81207, 81208, 81401, 0040U",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C91.00-C91.02, C92.10-C92.12, C92.20-C92.22",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.86",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Duchenne and Becker Muscular Dystrophy",
      "CPT": "81161, 81408",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G71.01, R62.59, Z31.430",
      "Comments for ICD10's": "Removed G71.0"
    },
    {
      "Policy #": "2.04.87",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Hereditary Hearing Loss",
      "CPT": "81252, 81253, 81254, 81430, 81431",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "H90.0-H90.8, H91.8X1-H91.8X9, Z14.8, Z15.89, Z31.430, Z31.440, Z82.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.88",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for PTEN Hamartoma Tumor Syndrome",
      "CPT": "81321, 81322, 81323",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Q85.8, Q85.9, Z13.71, Z13.79",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.89",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for the Diagnosis of Inherited Peripheral Neuropathies",
      "CPT": "81324, 81325, 81326, 81403, 81405, 81406, 81448, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G60.0, G60.8, G60.9, Z31.430, Z31.440",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.94",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Lactase Insufficiency",
      "CPT": 81400,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.96",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Statin-Induced Myopathy",
      "CPT": 81328,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G71.14, T46.6X5 A,D, S",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.97",
      "Brand Drug Name": "",
      "Full Policy": "Microarray-Based Gene Expression Profile Testing for Multiple Myeloma Risk Stratification",
      "CPT": "81479, 81599, 86849",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C90.00-C90.02",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "2.04.99",
      "Brand Drug Name": "",
      "Full Policy": "Genetic Testing for Hereditary Pancreatitis",
      "CPT": "81222, 81223, 81401, 81404, 81405, 81479",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K85.0-K85.92 , K86.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "4.01.11",
      "Brand Drug Name": "",
      "Full Policy": "Occlusion of Uterine Arteries Using Transcatheter Embolization",
      "CPT": "37243, 36244, 36245, 36246, 36247",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D25.0-D25.9, O00.8, O72.0-O72.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "4.01.19",
      "Brand Drug Name": "",
      "Full Policy": "Laparoscopic and Percutaneous Techniques for the Myolysis of Uterine Fibroids",
      "CPT": "58578, 58674, 58999, 77022, 76940, 76998",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D25.0-D25.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "4.01.21",
      "Brand Drug Name": "",
      "Full Policy": "Noninvasive Prenatal Screening for Fetal Aneuploidies and Microdeletions Using Cell-Free Fetal DNA",
      "CPT": "81420, 81422, 81599, 81479, 81507, 88271, 0009M",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "O09.511, Z31.430-Z31.438, Z36",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.01",
      "Brand Drug Name": "Hepatitis B Interon A Monotherapy",
      "Full Policy": "Intron A (interferon alfa-2b)",
      "CPT": "",
      "HCPCS": "J9214",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.05",
      "Brand Drug Name": "Intron A Hepatitis C",
      "Full Policy": "Intron A (interferon alfa-2b)",
      "CPT": "",
      "HCPCS": "J9214",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.06",
      "Brand Drug Name": "Intron A Ribavirin",
      "Full Policy": "Intron A (interferon alfa-2b) with ribavirin, (Moderiba, Rebetol, Ribasphere, RibaTab, ribavirin tablets/capsules - all strengths)",
      "CPT": "",
      "HCPCS": "J9214",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.15",
      "Brand Drug Name": "IV Antibiotics for Lyme Disease",
      "Full Policy": "IV Antibiotics for Lyme Disease (Ceftriaxone, Cefotaxime sodium, Doxycycline, Penicillin G potassium)",
      "CPT": "",
      "HCPCS": "J0696, J0698, J2540, J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.17",
      "Brand Drug Name": "Relenza",
      "Full Policy": "Relenza (zanamivir)",
      "CPT": "",
      "HCPCS": "G9018, G9034",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.18",
      "Brand Drug Name": "Itraconazole",
      "Full Policy": "Onmel (itraconazole); Sporanox (itraconazole); Tolsura (itraconazole)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Added to PA 02/15/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.19",
      "Brand Drug Name": "Tamiflu",
      "Full Policy": "Tamiflu (oseltamivir)",
      "CPT": "",
      "HCPCS": "G9019",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.20",
      "Brand Drug Name": "Zyvox",
      "Full Policy": "Zyvox (linezolid)",
      "CPT": "",
      "HCPCS": "J2020",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.22",
      "Brand Drug Name": "Valcyte",
      "Full Policy": "Valcyte (valganciclovir)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.23",
      "Brand Drug Name": "Ketoconazole",
      "Full Policy": "Ketoconazole tablets",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.25",
      "Brand Drug Name": "Sovaldi Pegasys PegIntron Ribavirin",
      "Full Policy": "Sovaldi (sofosbuvir) with Pegasys (peginterferon alfa-2a); Sovaldi (sofosbuvir) with PegIntron (peginterferon alfa-2b) and Ribavirin and Ribavirin (Copegus, Moderiba, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin)",
      "CPT": "",
      "HCPCS": "J8499, J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.31",
      "Brand Drug Name": "Sivextro",
      "Full Policy": "Sivextro (tedizolid)",
      "CPT": "",
      "HCPCS": "J3090",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.34",
      "Brand Drug Name": "Xifaxan",
      "Full Policy": "Xifaxan (rifaximin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.35",
      "Brand Drug Name": "Cresemba",
      "Full Policy": "Cresemba (isavuconazonium)",
      "CPT": "",
      "HCPCS": "J1833",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.38",
      "Brand Drug Name": "Daraprim",
      "Full Policy": "Daraprim (pyrimethamine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.41",
      "Brand Drug Name": "Hepatitis C Agents",
      "Full Policy": "Epclusa (sofosbuvir & velpatasvir), Harvoni (ledipasvir& sofosbuvir), Sovaldi (sofosbuvir), Mavyret (glecaprevir and pibrentasvir), , Vosevi (sofosbuvir, velpatasvir, & voxilaprevir), Zepatier (elbasvir, grazoprevir)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Daklinza (daclatasvir), Viekira Pak, Viekira XR (ombitasvir, paritaprevir, ritonavir and (dasabuvir) (removed from the market)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.42",
      "Brand Drug Name": "Anthelmintic Drugs",
      "Full Policy": "Albenza (albendazole), Emverm (mebendazole)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.43",
      "Brand Drug Name": "Prevymis",
      "Full Policy": "Prevymis (letermovir)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.44",
      "Brand Drug Name": "Vfend",
      "Full Policy": "Vfend IV injection, tablets, suspension (voriconazole)",
      "CPT": "",
      "HCPCS": "J3465, J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.45",
      "Brand Drug Name": "Trogarzo",
      "Full Policy": "Trogarzo (ibalizumab-uiyk)",
      "CPT": "",
      "HCPCS": "J1746",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.46",
      "Brand Drug Name": "Xepi",
      "Full Policy": "Xepi (ozenoxacin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.47",
      "Brand Drug Name": "Pegasys Pegintron Ribavirin",
      "Full Policy": "Pegasys (peginterferon alfa-2a), Pegintron (peginterferon alfa-2b), Ribavirin (Moderiba, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin tablets/capsules)",
      "CPT": "",
      "HCPCS": "J3490, S0145, S0149",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.48",
      "Brand Drug Name": "Arikayce",
      "Full Policy": "Arikayce (amikacin liposome inhalation suspension)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.49",
      "Brand Drug Name": "Xofluza",
      "Full Policy": "Xofluza (baloxavir marboxil) tablets",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.01.50",
      "Brand Drug Name": "Aemcolo",
      "Full Policy": "Aemcolo (rifamycin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Added to PA 03/08/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.03.03",
      "Brand Drug Name": "Hepatitis C Infergen Monotherapy",
      "Full Policy": "Infergen (interferon alfacon-1)",
      "CPT": "",
      "HCPCS": "J9212",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.03.04",
      "Brand Drug Name": "Hepatitis C Infergen with Ribavirin",
      "Full Policy": "Infergen (interferon alfacon-1) with Ribavirin (Copegus, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin tablets/capsules - all strengths)",
      "CPT": "",
      "HCPCS": "J9212",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.17.01",
      "Brand Drug Name": "Vimovo",
      "Full Policy": "Vimovo (delayed-release enteric-coated naproxen with esomeprazole)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.01",
      "Brand Drug Name": "Atgam",
      "Full Policy": "Atgam (lymphocyte immune globulin, anti-thymocyte globulin [equine])",
      "CPT": "",
      "HCPCS": "J7504",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.02",
      "Brand Drug Name": "GamaSTAN SD",
      "Full Policy": "GamaSTAN S/D (IGIM)",
      "CPT": "",
      "HCPCS": "J1560",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.03",
      "Brand Drug Name": "IVIG",
      "Full Policy": "IVIG Immune Globulin – Bivigam, Flebogamma, Gammagard, Gammagard S/D, Gammaked, Gammaplex, Gamunex-C, Octagam, Panzyga, Privigen",
      "CPT": "",
      "HCPCS": "J1459, J1556, J1557, J1559, J1561, J1566, J1568, J1569, J1572",
      "Comments for Procedure codes": "Carimune NF (removed from the market)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.04",
      "Brand Drug Name": "Synagis",
      "Full Policy": "Synagis (palivizumab)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.05",
      "Brand Drug Name": "Ragwitek",
      "Full Policy": "Ragwitek (Short Ragweed Pollen Allergen Extract)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.06",
      "Brand Drug Name": "Oralair",
      "Full Policy": "Oralair (Sweet Vernal, Orchard, Perennial Rye, Timothy, and Kentucky Blue Grass Mixed Pollens Allergen Extract)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.07",
      "Brand Drug Name": "Grastek",
      "Full Policy": "Grastek (timothy grass pollen allergen extract)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.08",
      "Brand Drug Name": "SCIG Immune Globulin (subcutaneous immunoglobulin)",
      "Full Policy": "SCIG Immune Globulin – Cuvitru, Hizentra, Hyqvia,",
      "CPT": "",
      "HCPCS": "J3490, J1575",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.10",
      "Brand Drug Name": "Sylvant",
      "Full Policy": "Sylvant (situximab)",
      "CPT": "",
      "HCPCS": "J2860",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.20.11",
      "Brand Drug Name": "Odactra",
      "Full Policy": "Odactra (house dust mite allergen extract)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.01",
      "Brand Drug Name": "Actimmune",
      "Full Policy": "Actimmune (interferon gamma-1B)",
      "CPT": "",
      "HCPCS": "J9216",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.03",
      "Brand Drug Name": "Arzerra",
      "Full Policy": "Arzerra (ofatumumab)",
      "CPT": "",
      "HCPCS": "J9302",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.04",
      "Brand Drug Name": "Avastin",
      "Full Policy": "Avastin (bevacizumab)",
      "CPT": "",
      "HCPCS": "J9035, C9257",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.05",
      "Brand Drug Name": "Venclexta",
      "Full Policy": "Venclexta (venetoclax)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.06",
      "Brand Drug Name": "Herceptin",
      "Full Policy": "Herceptin (trastuzumab)",
      "CPT": "",
      "HCPCS": "J9355",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.07",
      "Brand Drug Name": "Intron A",
      "Full Policy": "Intron A (interferon alfa-2b)",
      "CPT": "",
      "HCPCS": "J9214",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.08",
      "Brand Drug Name": "Kepivance",
      "Full Policy": "Kepivance (palifermin)",
      "CPT": "",
      "HCPCS": "J2425",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.09",
      "Brand Drug Name": "Provenge",
      "Full Policy": "Provenge (sipuleucel-T)",
      "CPT": "",
      "HCPCS": "Q2043",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.10",
      "Brand Drug Name": "Rituxan",
      "Full Policy": "Rituxan (rituximab)",
      "CPT": "",
      "HCPCS": "J9312",
      "Comments for Procedure codes": "New Code eff 01/01/2019, J9310 Deleted eff 12/31/2018",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.12",
      "Brand Drug Name": "Xalkori",
      "Full Policy": "Xalkori (crizotinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.13",
      "Brand Drug Name": "Yervoy",
      "Full Policy": "Yervoy (ipilimumab)",
      "CPT": "",
      "HCPCS": "J9228",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.14",
      "Brand Drug Name": "Zelboraf",
      "Full Policy": "Zelboraf (vemurafenib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.15",
      "Brand Drug Name": "Zolinza",
      "Full Policy": "Zolinza (vorinostat)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.16",
      "Brand Drug Name": "Caprelsa",
      "Full Policy": "Caprelsa (vandetanib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.16",
      "Brand Drug Name": "Afrezza",
      "Full Policy": "Afrezza (insulin human)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.17",
      "Brand Drug Name": "Erwinaze",
      "Full Policy": "Erwinaze (asparaginase Erwinia chrysanthemi)",
      "CPT": "",
      "HCPCS": "J9019",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.18",
      "Brand Drug Name": "Jakafi",
      "Full Policy": "Jakafi (ruxolitinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.19",
      "Brand Drug Name": "Adcetris",
      "Full Policy": "Adcetris (brentuximab vedotin)",
      "CPT": "",
      "HCPCS": "J9042",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.20",
      "Brand Drug Name": "Perjeta",
      "Full Policy": "Perjeta (pertuzumab)",
      "CPT": "",
      "HCPCS": "J9306",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.21",
      "Brand Drug Name": "Xtandi",
      "Full Policy": "Xtandi (enzalutamide)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.22",
      "Brand Drug Name": "Bosulif",
      "Full Policy": "Bosulif (bosutinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.23",
      "Brand Drug Name": "Tykerb",
      "Full Policy": "Tykerb (lapatinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.24",
      "Brand Drug Name": "Kyprolis",
      "Full Policy": "Kyprolis (carfilzomib)",
      "CPT": "",
      "HCPCS": "J9047",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.25",
      "Brand Drug Name": "Zaltrap",
      "Full Policy": "Zaltrap (ziv-aflibercept)",
      "CPT": "",
      "HCPCS": "J9400",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.26",
      "Brand Drug Name": "Stivarga",
      "Full Policy": "Stivarga (regorafenib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.27",
      "Brand Drug Name": "Jevtana",
      "Full Policy": "Jevtana (cabazitaxel)",
      "CPT": "",
      "HCPCS": "J9043",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.28",
      "Brand Drug Name": "Zytiga",
      "Full Policy": "Zytiga (abiraterone acetate)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.29",
      "Brand Drug Name": "Gazyva",
      "Full Policy": "Gazyva (obinutuzumab)",
      "CPT": "",
      "HCPCS": "J9301",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.30",
      "Brand Drug Name": "Iclusig",
      "Full Policy": "Iclusig (ponatinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.31",
      "Brand Drug Name": "Synribo",
      "Full Policy": "Synribo (omacetaxine mepesuccinate)",
      "CPT": "",
      "HCPCS": "J9262",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.32",
      "Brand Drug Name": "Kadcyla",
      "Full Policy": "Kadcyla (ado-trastuzumab)",
      "CPT": "",
      "HCPCS": "J9354",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.33",
      "Brand Drug Name": "Cometriq",
      "Full Policy": "Cometriq (cabozantinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.34",
      "Brand Drug Name": "Inlyta",
      "Full Policy": "Inlyta (axitinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.35",
      "Brand Drug Name": "Erivedge",
      "Full Policy": "Erivedge (vismodegib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.36",
      "Brand Drug Name": "Pomalyst",
      "Full Policy": "Pomalyst (pomalidomide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.37",
      "Brand Drug Name": "Tafinlar",
      "Full Policy": "Tafinlar (dabrafenib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.38",
      "Brand Drug Name": "Mekinist",
      "Full Policy": "Mekinist (trametinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.39",
      "Brand Drug Name": "Gilotrif",
      "Full Policy": "Gilotrif (afatinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.40",
      "Brand Drug Name": "Valchlor",
      "Full Policy": "Valchlor (mechlorethamine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.41",
      "Brand Drug Name": "Imbruvica",
      "Full Policy": "Imbruvica (ibrutinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.42",
      "Brand Drug Name": "Marqibo",
      "Full Policy": "Marqibo (vincristine liposome injection)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.43",
      "Brand Drug Name": "Treanda, Bendeka, Belrapzo",
      "Full Policy": "Treanda, Bendeka, Belrapzo (bendamustine hcl)",
      "CPT": "",
      "HCPCS": "C9042, J9033, J9034",
      "Comments for Procedure codes": "New code eff 04/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.44",
      "Brand Drug Name": "Cyramza",
      "Full Policy": "Cyramza (ramucirumab)",
      "CPT": "",
      "HCPCS": "J9308",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.45",
      "Brand Drug Name": "Velcade",
      "Full Policy": "Velcade (bortezomib)",
      "CPT": "",
      "HCPCS": "J9041, J9044",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.46",
      "Brand Drug Name": "Zykadia",
      "Full Policy": "Zykadia (ceritinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.47",
      "Brand Drug Name": "Revlimid",
      "Full Policy": "Revlimid (lenalidomide)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.48",
      "Brand Drug Name": "Beleodaq",
      "Full Policy": "Beleodaq (belinostat)",
      "CPT": "",
      "HCPCS": "J9032",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.49",
      "Brand Drug Name": "Zydelig",
      "Full Policy": "Zydelig (idelalisib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.50",
      "Brand Drug Name": "Keytruda",
      "Full Policy": "Keytruda (pembrolizumab)",
      "CPT": "",
      "HCPCS": "J9271",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.51",
      "Brand Drug Name": "Blincyto",
      "Full Policy": "Blincyto (blinatumomab)",
      "CPT": "",
      "HCPCS": "J9039",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.52",
      "Brand Drug Name": "Lynparza",
      "Full Policy": "Lynparza (olaparib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.53",
      "Brand Drug Name": "Opdivo",
      "Full Policy": "Opdivo (nivolumab)",
      "CPT": "",
      "HCPCS": "J9299",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.54",
      "Brand Drug Name": "Ibrance",
      "Full Policy": "Ibrance (palbociclib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.55",
      "Brand Drug Name": "Lenvima",
      "Full Policy": "Lenvima (lenvatinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.56",
      "Brand Drug Name": "Farydak",
      "Full Policy": "Farydak (panobinostat)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.57",
      "Brand Drug Name": "Istodax",
      "Full Policy": "Istodax (romidepsin)",
      "CPT": "",
      "HCPCS": "J9315",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.58",
      "Brand Drug Name": "Unituxin",
      "Full Policy": "Unituxin (dinutuximab)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.59",
      "Brand Drug Name": "Iressa",
      "Full Policy": "Iressa (gefitinib)",
      "CPT": "",
      "HCPCS": "J8565",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.60",
      "Brand Drug Name": "Nexavar",
      "Full Policy": "Nexavar (sorafenib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.61",
      "Brand Drug Name": "Odomzo",
      "Full Policy": "Odomzo (sonidegib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.62",
      "Brand Drug Name": "Afinitor",
      "Full Policy": "Afinitor (everolimus)",
      "CPT": "",
      "HCPCS": "J7527",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.63",
      "Brand Drug Name": "Sprycel",
      "Full Policy": "Sprycel (dasatinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.64",
      "Brand Drug Name": "Lonsurf",
      "Full Policy": "Lonsurf (trifluridine tipiracil)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.65",
      "Brand Drug Name": "Yondelis",
      "Full Policy": "Yondelis (trabectedin)",
      "CPT": "",
      "HCPCS": "J9352",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.66",
      "Brand Drug Name": "Imlygic",
      "Full Policy": "Imlygic (talimogene laherparepvec)",
      "CPT": "",
      "HCPCS": "J9325",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.67",
      "Brand Drug Name": "Onivyde",
      "Full Policy": "Onivyde (irinotecan liposome injection)",
      "CPT": "",
      "HCPCS": "J9205",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.68",
      "Brand Drug Name": "Cotellic",
      "Full Policy": "Cotellic (cobimetinib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.69",
      "Brand Drug Name": "Tagrisso",
      "Full Policy": "Tagrisso (osimertinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.70",
      "Brand Drug Name": "Darzalex",
      "Full Policy": "Darzalex (daratumumab)",
      "CPT": "",
      "HCPCS": "J9145",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.71",
      "Brand Drug Name": "Ninlaro",
      "Full Policy": "Ninlaro (ixazomib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.72",
      "Brand Drug Name": "Portrazza",
      "Full Policy": "Portrazza (necitumumab)",
      "CPT": "",
      "HCPCS": "J9295",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.73",
      "Brand Drug Name": "Empliciti",
      "Full Policy": "Empliciti (elotuzumab)",
      "CPT": "",
      "HCPCS": "J9176",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.74",
      "Brand Drug Name": "Gleevec",
      "Full Policy": "Gleevec (imatinib)",
      "CPT": "",
      "HCPCS": "S0088",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.75",
      "Brand Drug Name": "Alecensa",
      "Full Policy": "Alecensa (alectinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.76",
      "Brand Drug Name": "Halaven",
      "Full Policy": "Halaven (eribulin mesylate)",
      "CPT": "",
      "HCPCS": "J9179",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.77",
      "Brand Drug Name": "Tasigna",
      "Full Policy": "Tasigna (nilotinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.78",
      "Brand Drug Name": "Evomela",
      "Full Policy": "Evomela (melphalan)",
      "CPT": "",
      "HCPCS": "J9245",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.79",
      "Brand Drug Name": "Cabometyx",
      "Full Policy": "Cabometyx (cabozantinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.80",
      "Brand Drug Name": "Tecentriq",
      "Full Policy": "Tecentriq (atezolizumab)",
      "CPT": "",
      "HCPCS": "J9022",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.81",
      "Brand Drug Name": "Targretin",
      "Full Policy": "Targretin (bexarotene)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.82",
      "Brand Drug Name": "Tarceva",
      "Full Policy": "Tarceva (erlotinib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.83",
      "Brand Drug Name": "Votrient",
      "Full Policy": "Votrient (pazopanib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.84",
      "Brand Drug Name": "Erbitux",
      "Full Policy": "Erbitux (cetuximab)",
      "CPT": "",
      "HCPCS": "J9055",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.85",
      "Brand Drug Name": "Vectibix",
      "Full Policy": "Vectibix (panitumumab)",
      "CPT": "",
      "HCPCS": "J9303",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.86",
      "Brand Drug Name": "Nilandron",
      "Full Policy": "Nilandron (nilutamide)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.87",
      "Brand Drug Name": "Rubraca",
      "Full Policy": "Rubraca (rucaparib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.88",
      "Brand Drug Name": "Kisqali",
      "Full Policy": "Kisqali (ribociclib), Kisqali Femara Co-Pack (ribociclib & letrozole)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.89",
      "Brand Drug Name": "Bavencio",
      "Full Policy": "Bavencio (avelumab)",
      "CPT": "",
      "HCPCS": "J9023",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.90",
      "Brand Drug Name": "Zejula",
      "Full Policy": "Zejula (niraparib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.91",
      "Brand Drug Name": "Lartruvo",
      "Full Policy": "Lartruvo (olaratumab)",
      "CPT": "",
      "HCPCS": "J9285",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.92",
      "Brand Drug Name": "Alunbrig",
      "Full Policy": "Alunbrig (brigatinib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.93",
      "Brand Drug Name": "Rydapt",
      "Full Policy": "Rydapt (midostaurin)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.94",
      "Brand Drug Name": "Imfinzi",
      "Full Policy": "Imfinzi (durvalumab)",
      "CPT": "",
      "HCPCS": "J9173",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.95",
      "Brand Drug Name": "Sutent",
      "Full Policy": "Sutent (sunitinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.96",
      "Brand Drug Name": "Rituxan",
      "Full Policy": "Rituxan Hycela (rituximab and hyaluronidase human)",
      "CPT": "",
      "HCPCS": "J9311",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.97",
      "Brand Drug Name": "Nerlynx",
      "Full Policy": "Nerlynx (neratinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.98",
      "Brand Drug Name": "Idhifa",
      "Full Policy": "Idhifa (enasidenib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.99",
      "Brand Drug Name": "Vyxeos",
      "Full Policy": "Vyxeos (daunorubicin and cytarabine)",
      "CPT": "",
      "HCPCS": "J9153",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.100",
      "Brand Drug Name": "Besponsa",
      "Full Policy": "Besponsa (inotuzumab ozogamicin)",
      "CPT": "",
      "HCPCS": "J9229",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.101",
      "Brand Drug Name": "Kymriah",
      "Full Policy": "Kymriah (tisagenlecleucel)",
      "CPT": "",
      "HCPCS": "Q2040",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.102",
      "Brand Drug Name": "Mylotarg",
      "Full Policy": "Mylotarg (gemtuzumab ozogamicin)",
      "CPT": "",
      "HCPCS": "J9203",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.103",
      "Brand Drug Name": "Aliqopa",
      "Full Policy": "Aliqopa (copanlisib)",
      "CPT": "",
      "HCPCS": "J9057",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.104",
      "Brand Drug Name": "Verzenio",
      "Full Policy": "Verzenio (abemaciclib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.105",
      "Brand Drug Name": "Yescarta",
      "Full Policy": "Yescarta (axicabtagene ciloleucel)",
      "CPT": "",
      "HCPCS": "Q2041",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.106",
      "Brand Drug Name": "Calquence",
      "Full Policy": "Calquence (acalabrutinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.107",
      "Brand Drug Name": "Lutathera",
      "Full Policy": "Lutathera (lutetium Lu 177 dotatate)",
      "CPT": "",
      "HCPCS": "A9513",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.108",
      "Brand Drug Name": "Erleada",
      "Full Policy": "Erleada (apalutamide)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.109",
      "Brand Drug Name": "Yonsa",
      "Full Policy": "Yonsa (abiraterone acetate)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.110",
      "Brand Drug Name": "Braftovi",
      "Full Policy": "Braftovi (encorafenib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.111",
      "Brand Drug Name": "Mektovi",
      "Full Policy": "Mektovi (binimetinib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.112",
      "Brand Drug Name": "Tibsovo",
      "Full Policy": "Tibsovo (ivosidenib)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.113",
      "Brand Drug Name": "Azedra",
      "Full Policy": "Azedra (iobenguane I 131)",
      "CPT": "",
      "HCPCS": "C9407, C9408",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.114",
      "Brand Drug Name": "Poteligeo",
      "Full Policy": "Poteligeo (mogamulizumab-kpkc)",
      "CPT": "",
      "HCPCS": "C9038",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.115",
      "Brand Drug Name": "Lumoxiti",
      "Full Policy": "Lumoxiti (moxetumomab pasudotox-tdfk)",
      "CPT": "",
      "HCPCS": "C9045",
      "Comments for Procedure codes": "New code eff 04/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.116",
      "Brand Drug Name": "Copiktra",
      "Full Policy": "Copiktra (duvelisib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.117",
      "Brand Drug Name": "Vizimpro",
      "Full Policy": "Vizimpro (dacomitinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.118",
      "Brand Drug Name": "Libtayo",
      "Full Policy": "Libtayo (cemiplimab-rwlc)",
      "CPT": "",
      "HCPCS": "C9044",
      "Comments for Procedure codes": "New code eff 04/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.119",
      "Brand Drug Name": "Talzenna",
      "Full Policy": "Talzenna (talazoparib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.121",
      "Brand Drug Name": "Daurismo",
      "Full Policy": "Daurismo (glasdegib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "Added to PA 12/21/2018",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.122",
      "Brand Drug Name": "Vitrakvi",
      "Full Policy": "Vitrakvi (larotrectinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "Added to PA 12/21/2018",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.123",
      "Brand Drug Name": "Xospata",
      "Full Policy": "Xospata (gilteritinib)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "Added to PA 12/21/2018",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.21.124",
      "Brand Drug Name": "Elzonris",
      "Full Policy": "Elzonris (tagraxofusp-erzs)",
      "CPT": "",
      "HCPCS": "J9999",
      "Comments for Procedure codes": "Added to PA 03/08/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.01",
      "Brand Drug Name": "Naglazyme",
      "Full Policy": "Naglazyme (galsulfase)",
      "CPT": "",
      "HCPCS": "J1458",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.02",
      "Brand Drug Name": "Assisted Reproductive Technology (ART) Infertility Drugs",
      "Full Policy": "Bravelle (urofollitropin), Cetrotide (cetrorelix), Clomid / Clomiphene Powder / Serophene (clomiphene citrate), Crinone / Endometrin / First – Progesterone VGS / Progesterone in Oil / Progesterone Powder /Prometrium (progesterone), Follistima AQ (follitropin beta), Gonal-F / Gonal F RFF (follitropin alfa), Ganirelix (ganirelix), Eligard / Lupron Depot (leuprolide), Leuprolide powder, Luveris (lutropin alpha), Menopur /Repronex (menotropins)",
      "CPT": "",
      "HCPCS": "J3490, J3355, J8499, S0128, S0126, S0132, J9217",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.03",
      "Brand Drug Name": "Synarel",
      "Full Policy": "Assisted Reproductive Technology (ART) / Infertility / Synarel (nafarelin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.04",
      "Brand Drug Name": "Carbaglu",
      "Full Policy": "Carbaglu (carglumic acid)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.05",
      "Brand Drug Name": "Egrifta",
      "Full Policy": "Egrifta (tesamorelin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.06",
      "Brand Drug Name": "Tocolytics",
      "Full Policy": "Tocolytics (terbutaline, magnesium sulfate injection)",
      "CPT": "",
      "HCPCS": "J3105",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.07",
      "Brand Drug Name": "Increlex",
      "Full Policy": "Increlex (mecasermin)",
      "CPT": "",
      "HCPCS": "J2170",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.08",
      "Brand Drug Name": "Elaprase",
      "Full Policy": "Elaprase (idursulfase)",
      "CPT": "",
      "HCPCS": "J1743",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.09",
      "Brand Drug Name": "Sandostatin LAR",
      "Full Policy": "Sandostatin LAR (octreotide acetate)",
      "CPT": "",
      "HCPCS": "J2353, J2354",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.10",
      "Brand Drug Name": "Acthar Gel",
      "Full Policy": "H. P. Acthar Gel (corticotropin; ACTH)",
      "CPT": "",
      "HCPCS": "J0800",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.11",
      "Brand Drug Name": "Growth Hormone - Adult",
      "Full Policy": "Humatrope*, Norditropin*, Genotropin, Nutropin, Nutropin AQ, Omnitrope, Saizen, Zomacton",
      "CPT": "",
      "HCPCS": "J2941",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.12",
      "Brand Drug Name": "Growth Hormone - Pediatric",
      "Full Policy": "Humatrope*, Norditropin*, Genotropin, Nutropin, Nutropin AQ, Omnitrope, Saizen, Zomacton (aka. Tev-Tropin)",
      "CPT": "",
      "HCPCS": "J2941",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.13",
      "Brand Drug Name": "Rayos",
      "Full Policy": "Rayos (prednisone)",
      "CPT": "",
      "HCPCS": "J7512",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.14",
      "Brand Drug Name": "Kuvan",
      "Full Policy": "Kuvan (sapropterin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.15",
      "Brand Drug Name": "Strensiq",
      "Full Policy": "Strensiq (asfotase alfa)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.17",
      "Brand Drug Name": "Prolia",
      "Full Policy": "Prolia (denosumab)",
      "CPT": "",
      "HCPCS": "J0897",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.18",
      "Brand Drug Name": "Xgeva",
      "Full Policy": "Xgeva (denosumab)",
      "CPT": "",
      "HCPCS": "J0897",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.19",
      "Brand Drug Name": "SGLT2 Inhibitors",
      "Full Policy": "Invokana (canagliflozin), Invokamet, Invokamet XR (canagliflozin & metformin), Steglatro (ertugliflozin), Steglujan (ertugliflozin & sitagliptin), Segluromet (ertugliflozin & metformin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Added to Policy 01/01/19;Removed Step Edit SGLT2s from policy: Farxiga, Qtern, Jardiance, Glyxambi, Synjardy, Synjardy XR, Xigduo XR",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.20",
      "Brand Drug Name": "Metformin",
      "Full Policy": "Fortamet (extended-release metformin osmotic), Glumetza* (extended-release metformin), Riomet (metformin oral solution), Metformin ER (modified & osmotic",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "New policy name (combining 05.30.50) eff 03/22/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.21",
      "Brand Drug Name": "Natpara",
      "Full Policy": "Natpara (parathyroid hormone)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.22",
      "Brand Drug Name": "Serostim",
      "Full Policy": "Serostim (somatropin)",
      "CPT": "",
      "HCPCS": "J2941",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.23",
      "Brand Drug Name": "Vimizin",
      "Full Policy": "Vimizim (elosulfase alfa)",
      "CPT": "",
      "HCPCS": "J1322",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.24",
      "Brand Drug Name": "Zorbtive",
      "Full Policy": "Zorbtive (somatropin)",
      "CPT": "",
      "HCPCS": "J2941",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.25",
      "Brand Drug Name": "Korlym",
      "Full Policy": "Korlym (mifepristone)",
      "CPT": "",
      "HCPCS": "S0190",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.26",
      "Brand Drug Name": "Signifor",
      "Full Policy": "Signifor (pasireotide)",
      "CPT": "",
      "HCPCS": "J2502",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.27",
      "Brand Drug Name": "Somatuline Depot",
      "Full Policy": "Somatuline Depot (lanreotide)",
      "CPT": "",
      "HCPCS": "J1930",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.29",
      "Brand Drug Name": "Ravicti",
      "Full Policy": "Ravicti (glycerol phenylbutyrate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.30",
      "Brand Drug Name": "Buphenyl",
      "Full Policy": "Buphenyl (sodium phenylbutyrate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.31",
      "Brand Drug Name": "Testosterone Topical",
      "Full Policy": "Androderm patch, AndroGel packets and pump, Axiron solution, First-Testosterone, First-Testosterone MC, Fortesta gel, Testim gel, Vogelxo",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.32",
      "Brand Drug Name": "Testosterone Oral Buccal Nasal",
      "Full Policy": "Android, Androxy, Methitest, Natesto, Striant, Testred",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.33",
      "Brand Drug Name": "Testosterone Injection and Implant",
      "Full Policy": "Aveed (testosterone undecanoate injection), Delatestryl (testosterone enanthate injection), Depo-Testosterone and Testopel (testosterone propionate implant), Xyosted",
      "CPT": "",
      "HCPCS": "J3145, J3121, J1071, S0189",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.34",
      "Brand Drug Name": "Lumizyme",
      "Full Policy": "Lumizyme (alglucosidase alfa)",
      "CPT": "",
      "HCPCS": "J0221",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.35",
      "Brand Drug Name": "Fabrazyme",
      "Full Policy": "Fabrazyme (agalsidase beta)",
      "CPT": "",
      "HCPCS": "J0180",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.36",
      "Brand Drug Name": "Parathyroid Hormone Analogs",
      "Full Policy": "Forteo (teriparatide), Tymlos (abaloparatide)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.37",
      "Brand Drug Name": "Testosterone  Powder",
      "Full Policy": "Testosterone (cypionate, enanthate, and propionate) powder, Fluoxymesterone powder, Methyltestosterone powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.38",
      "Brand Drug Name": "Signifor LAR",
      "Full Policy": "Signifor LAR (pasireotide pamoate)",
      "CPT": "",
      "HCPCS": "J2502",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.39",
      "Brand Drug Name": "GnRH GD",
      "Full Policy": "Firmagon (degarelix), Supprelin LA (histrelin), Trelstar (triptorelin), Triptodur (triptorelin), Vantas (histrelin), Zoladex (goserelin)",
      "CPT": "",
      "HCPCS": "J3315, J3316, J9202, J9225, J9226, J1675, J9155",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.40",
      "Brand Drug Name": "Kanuma",
      "Full Policy": "Kanuma (sebelipase alfa)",
      "CPT": "",
      "HCPCS": "J2840",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.41",
      "Brand Drug Name": "Xuriden",
      "Full Policy": "Xuriden (uridine triacetate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.42",
      "Brand Drug Name": "Potassium Binders",
      "Full Policy": "Lokelma (sodium zirconium cyclosilicate)*, Veltassa (patiromer)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.43",
      "Brand Drug Name": "HCG Powder, Novarel, Pregnyl, Ovidrel",
      "Full Policy": "HCG (human chorionic gonadotropin); Novarel Pregnyl (chorionic gonadotropin); Ovidrel (choriogonadotropin alfa)",
      "CPT": "",
      "HCPCS": "J0725",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.44",
      "Brand Drug Name": "Aldurazyme (laronidase)",
      "Full Policy": "Aldurazyme (laronidase)",
      "CPT": "",
      "HCPCS": "J1931",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.45",
      "Brand Drug Name": "Myalept",
      "Full Policy": "Myalept (metreleptin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.46",
      "Brand Drug Name": "Sensipar",
      "Full Policy": "Sensipar (cinacalcet)",
      "CPT": "",
      "HCPCS": "J0604",
      "Comments for Procedure codes": "Note: moved J0604 from 5.30.47",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.47",
      "Brand Drug Name": "Parsabiv",
      "Full Policy": "Parsabiv (etelcalcetide)",
      "CPT": "",
      "HCPCS": "J0606",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.48",
      "Brand Drug Name": "Insulin GLP-1 Combinations",
      "Full Policy": "Soliqua (insulin glargine and lixisenatide), Xultophy (insulin degludec and liraglutide)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.49",
      "Brand Drug Name": "Brineura",
      "Full Policy": "Brineura (cerliponase alfa)",
      "CPT": "",
      "HCPCS": "J0567",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.51",
      "Brand Drug Name": "Mepsevii",
      "Full Policy": "Mepsevii (vestronidase alfa-vjbk)",
      "CPT": "",
      "HCPCS": "J3397",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.52",
      "Brand Drug Name": "Crysvita",
      "Full Policy": "Crysvita (burosumab-twza)",
      "CPT": "",
      "HCPCS": "J0584",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.53",
      "Brand Drug Name": "Jynarque",
      "Full Policy": "Jynarque (tolvaptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.54",
      "Brand Drug Name": "Samsca",
      "Full Policy": "Samsca (tolvaptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.55",
      "Brand Drug Name": "Palynziq",
      "Full Policy": "Palynziq (pegvaliase-pqpz)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.56",
      "Brand Drug Name": "Orilissa",
      "Full Policy": "Orilissa (elagolix)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.57",
      "Brand Drug Name": "Galafold",
      "Full Policy": "Galafold (migalastat)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.58",
      "Brand Drug Name": "Nocdurna Noctiva",
      "Full Policy": "Nocdurna (desmopressin acetate) sublingual tablets, Noctiva (desmopressin acetate) nasal spray",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.59",
      "Brand Drug Name": "SGLT2 Step Policy",
      "Full Policy": "Farxiga (dapagliflozin), Qtern (dapagliflozin & saxagliptin), Xigduo XR(dapagliflozin & metformin) Jardiance (empagliflozin),  Glyxambi (empagliflozin & linagliptin), Synjardy, Synjardy XR (empagliflozin & metformin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "relocated from Policy 5.30.19",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.60",
      "Brand Drug Name": "Revcovi",
      "Full Policy": "Revcovi (elapegademase-lvlr)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.30.61",
      "Brand Drug Name": "Gamifant",
      "Full Policy": "Gamifant (emapalumab-lzsg)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 01/18/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.01",
      "Brand Drug Name": "Juxtapid",
      "Full Policy": "Juxtapid (lomitapide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.03",
      "Brand Drug Name": "Alprostadil",
      "Full Policy": "Alprostadil (prostaglandin E1)",
      "CPT": "",
      "HCPCS": "J0270",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.04",
      "Brand Drug Name": "Northera",
      "Full Policy": "Northera (droxidopa)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.05",
      "Brand Drug Name": "Corlanor",
      "Full Policy": "Corlanor (ivabradine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.06",
      "Brand Drug Name": "Praluent",
      "Full Policy": "Praluent (alirocumab)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.07",
      "Brand Drug Name": "Entresto",
      "Full Policy": "Entresto (sacubitril / valsartan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.08",
      "Brand Drug Name": "Repatha",
      "Full Policy": "Repatha (evolocumab)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.09",
      "Brand Drug Name": "Keveyis",
      "Full Policy": "Keveyis (dichlorphenamide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.10",
      "Brand Drug Name": "Uptravi",
      "Full Policy": "Uptravi (selexipag)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.11",
      "Brand Drug Name": "Revatio",
      "Full Policy": "Revatio (sildenafil)",
      "CPT": "",
      "HCPCS": "S0090",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.12",
      "Brand Drug Name": "Ventavis",
      "Full Policy": "Ventavis (iloprost)",
      "CPT": "",
      "HCPCS": "J4074",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.13",
      "Brand Drug Name": "Tyvaso",
      "Full Policy": "Tyvaso (treprostinil)",
      "CPT": "",
      "HCPCS": "J7686",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.14",
      "Brand Drug Name": "Adcirca",
      "Full Policy": "Adcirca (tadalafil)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.15",
      "Brand Drug Name": "Flolan; Veletri",
      "Full Policy": "Flolan; Veletri (epoprostenol)",
      "CPT": "",
      "HCPCS": "J1325",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.16",
      "Brand Drug Name": "Letairis",
      "Full Policy": "Letairis (ambrisentan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.17",
      "Brand Drug Name": "Remodulin",
      "Full Policy": "Remodulin (treprostinil)",
      "CPT": "",
      "HCPCS": "J3285",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.18",
      "Brand Drug Name": "Tracleer",
      "Full Policy": "Tracleer (bosentan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.19",
      "Brand Drug Name": "Adempas",
      "Full Policy": "Adempas (riociguat)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.20",
      "Brand Drug Name": "Opsumit",
      "Full Policy": "Opsumit (macitentan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.21",
      "Brand Drug Name": "Orenitram",
      "Full Policy": "Orenitram (treprostinil)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.22",
      "Brand Drug Name": "Cialis",
      "Full Policy": "Cialis (tadalafil)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.23",
      "Brand Drug Name": "Sildenafil powder, Tadalafil powder",
      "Full Policy": "Sildenafil powder, Tadalafil powder",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.24",
      "Brand Drug Name": "Phentolamine Powder",
      "Full Policy": "Phentolamine Powder",
      "CPT": "",
      "HCPCS": "J2760",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.25",
      "Brand Drug Name": "Papaverine Powder",
      "Full Policy": "Papaverine Powder",
      "CPT": "",
      "HCPCS": "J2440",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.40.26",
      "Brand Drug Name": "Cholestyramine Powder",
      "Full Policy": "Cholestyramine Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.01",
      "Brand Drug Name": "Pulmozyme",
      "Full Policy": "Pulmozyme (dornase alfa)",
      "CPT": "",
      "HCPCS": "J7639",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.02",
      "Brand Drug Name": "Xolair",
      "Full Policy": "Xolair (omalizumab)",
      "CPT": "",
      "HCPCS": "J2357",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.03",
      "Brand Drug Name": "Kalydeco",
      "Full Policy": "Kalydeco (ivacaftor)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.04",
      "Brand Drug Name": "Esbriet",
      "Full Policy": "Esbriet (pirfenidone)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.05",
      "Brand Drug Name": "Ofev",
      "Full Policy": "Ofev (nintedanib)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.06",
      "Brand Drug Name": "Orkambi",
      "Full Policy": "Orkambi (lumacaftor/ivacaftor)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.07",
      "Brand Drug Name": "IL-5 Antagonists (IgG1 kappa)",
      "Full Policy": "Fasenra (benralizumab) Nucala (mepolizumab)",
      "CPT": "",
      "HCPCS": "J0517, J2182",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.08",
      "Brand Drug Name": "Cinqair",
      "Full Policy": "Cinqair (reslizumab)",
      "CPT": "",
      "HCPCS": "J2786",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.09",
      "Brand Drug Name": "Alpha1-Proteinase Inhibitors",
      "Full Policy": "Aralast NP, Glassia, Prolastin-C, Zemaira",
      "CPT": "",
      "HCPCS": "J0256, J0257",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.10",
      "Brand Drug Name": "Symdeko",
      "Full Policy": "Symdeko (tezacaftor and ivacaftor)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.45.11",
      "Brand Drug Name": "Sinuva",
      "Full Policy": "Sinuva (mometasone furoate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.01",
      "Brand Drug Name": "Proton Pump Inhibitors",
      "Full Policy": "Aciphex (rabeprazole), Dexilant (dexlansoprazole), Esomeprazole Strontium, Nexium (esomeprazole), Prevacid (lansoprazole), Prilosec (omeprazole), Protonix (pantoprazole), First-Lansoprazole suspension, Zegerid (omeprazole / sodium bicarbonate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.02",
      "Brand Drug Name": "Remicade",
      "Full Policy": "Remicade (infliximab)",
      "CPT": "",
      "HCPCS": "J1745, Q5103, Q5104, Q5109",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.03",
      "Brand Drug Name": "Gattex",
      "Full Policy": "Gattex (teduglutide)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.05",
      "Brand Drug Name": "NK1 Antagonists",
      "Full Policy": "Cinvanti, Emend (aprepitant), Emend injection (fosaprepitant), Akynzeo (netupitant and palonosetron), Varubi (rolapitant)",
      "CPT": "",
      "HCPCS": "J0185, J1453, J1454, J2797, J8501, J8655, J8670, J3490,",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.06",
      "Brand Drug Name": "Opioid Antagonist Drug Class",
      "Full Policy": "Movantik (naloxegol), Relistor (methylnaltrexone bromide), Symproic (naldemedine)",
      "CPT": "",
      "HCPCS": "J8499, J2212",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.07",
      "Brand Drug Name": "Viberzi",
      "Full Policy": "Viberzi (eluxadoline)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.09",
      "Brand Drug Name": "Cholbam",
      "Full Policy": "Cholbam (cholic acid)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.10",
      "Brand Drug Name": "Ocaliva",
      "Full Policy": "Ocaliva (obeticholic acid)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.11",
      "Brand Drug Name": "Cimzia",
      "Full Policy": "Cimzia (certolizumab pegol)",
      "CPT": "",
      "HCPCS": "J0717",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.12",
      "Brand Drug Name": "Entyvio",
      "Full Policy": "Entyvio (vedolizumab)",
      "CPT": "",
      "HCPCS": "J3380",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.13",
      "Brand Drug Name": "Trulance",
      "Full Policy": "Trulance (plecanatide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.14",
      "Brand Drug Name": "Xermelo",
      "Full Policy": "Xermelo (telotristat ethyl)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.15",
      "Brand Drug Name": "5HT-3 Antagonists",
      "Full Policy": "Aloxi injection (palonosetron), Anzemet tablets (dolasetron), Granisetron injection, Kytril tablets, Sancuso patch, Sustol injection (granisetron), Zofran, Zuplenz oral film (ondansetron)",
      "CPT": "",
      "HCPCS": "J1626, J1627, J2469, Q0162, J3490",
      "Comments for Procedure codes": "Removed J2405 (Zofran injection)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.16",
      "Brand Drug Name": "Doxylamine Pyridoxine",
      "Full Policy": "Bonjesta, Diclegis (doxylamine-pyridoxine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.17",
      "Brand Drug Name": "Cannabinoids",
      "Full Policy": "Cesamet (nabilone), Marinol (dronabinol) capsules, Syndros (dronabinol) oral solution",
      "CPT": "",
      "HCPCS": "J8650, Q0167, J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.21",
      "Brand Drug Name": "PrevPac and Omeclamox",
      "Full Policy": "Prevpac (lansoprazole, clarithromycin, and amoxicillin) Pylera (bismuth subcitrate, metronidazole, tetracycline) Omeclamox-Pak (omeprazole, clarithromycin, and amoxicillin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.22",
      "Brand Drug Name": "Amitiza",
      "Full Policy": "Amitiza (lubiprostone)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.23",
      "Brand Drug Name": "Linzess",
      "Full Policy": "Linzess (linaclotide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.50.24",
      "Brand Drug Name": "Motegrity",
      "Full Policy": "Motegrity (prucalopride)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Added to PA 03/22/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.55.01",
      "Brand Drug Name": "Procysbi",
      "Full Policy": "Procysbi (cysteamine bitartrate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.01",
      "Brand Drug Name": "Tecfidera",
      "Full Policy": "Tecfidera (dimethyl fumarate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.02",
      "Brand Drug Name": "Ampyra",
      "Full Policy": "Ampyra (dalfampridine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.03",
      "Brand Drug Name": "Nuplazid",
      "Full Policy": "Nuplazid (pimavanserin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.04",
      "Brand Drug Name": "MS Injectable Drugs",
      "Full Policy": "Avonex, Rebif (interferon beta-1a); Plegridy (peginterferon beta-1a); Betaseron, Extavia (interferon beta-1b); Copaxone, Glatopa (glatiramer)",
      "CPT": "",
      "HCPCS": "J1826, Q3027, Q3028, J1595",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.05",
      "Brand Drug Name": "Xyrem",
      "Full Policy": "Xyrem (sodium oxybate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.06",
      "Brand Drug Name": "Belsomra",
      "Full Policy": "Belsomra (suvorexant)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.07",
      "Brand Drug Name": "Rozerem",
      "Full Policy": "Rozerem (ramelteon)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.08",
      "Brand Drug Name": "Gilenya",
      "Full Policy": "Gilenya (fingolimod)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.09",
      "Brand Drug Name": "Aubagio",
      "Full Policy": "Aubagio (teriflunomide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.10",
      "Brand Drug Name": "Hetlioz",
      "Full Policy": "Hetlioz (tasimelteon)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.11",
      "Brand Drug Name": "Sedative Hypnotics",
      "Full Policy": "Ambien (zolpidem), Ambien CR (zolpidem extended-release), Edluar (zolpidem sublingual), Dalmane (flurazepam), Halcion (triazolam), Intermezzo (zolpidem sublingual) Lunesta (eszopiclone), Prosom (estazolam), Restoril (temazepam), Sonata (zaleplon), Zolpimist (zolpidem) Oral Spray",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.12",
      "Brand Drug Name": "Xenazine",
      "Full Policy": "Xenazine (tetrabenazine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.13",
      "Brand Drug Name": "Tysabri",
      "Full Policy": "Tysabri (natalizumab)",
      "CPT": "",
      "HCPCS": "J2323",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.14",
      "Brand Drug Name": "Provigil Nuvigil",
      "Full Policy": "Provigil (modafinil) / Nuvigil (armodafinil)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.15",
      "Brand Drug Name": "Austedo",
      "Full Policy": "Austedo (deutetrabenazine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.23",
      "Brand Drug Name": "Lemtrada",
      "Full Policy": "Lemtrada (alemtuzumab)",
      "CPT": "",
      "HCPCS": "J0202",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.24",
      "Brand Drug Name": "Amphetamines",
      "Full Policy": "Adderall , Adderall XR (mixed salts of a single entity amphetamine) /Desoxyn (methamphetamine) / Dexedrine, Procentra, Zenzedi (dextroamphetamine), Adzenys XR–ODT, Evekeo, Mydayis (amphetamine sulfate) / Vyvanse (lisdexamfetamine) / Dyanaval XR (amphetamine suspension)",
      "CPT": "",
      "HCPCS": "J8499, S0160",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.25",
      "Brand Drug Name": "Methylphenidate Dexmethylphenidate",
      "Full Policy": "Concerta / Daytrana / Metadate CD / Metadate ER / Methylin / Methylin-ER / Quillivant XR / Ritalin / Ritalin LA / Ritalin-SR and Focalin/ Focalin XR (Methylphenidate and Dexmethylphenidate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.26",
      "Brand Drug Name": "Zyprexa Relprevv",
      "Full Policy": "Zyprexa Relprevv (olanzapine)",
      "CPT": "",
      "HCPCS": "J2358",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.27",
      "Brand Drug Name": "Nuedexta",
      "Full Policy": "Nuedexta (dextromethorphan hydrobromide/quinidine sulfate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.28",
      "Brand Drug Name": "Ocrevus",
      "Full Policy": "Ocrevus (ocrelizumab)",
      "CPT": "",
      "HCPCS": "J2350",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.29",
      "Brand Drug Name": "Ingrezza",
      "Full Policy": "Ingrezza (valbenazine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.60.30",
      "Brand Drug Name": "Lucemyra",
      "Full Policy": "Lucemyra (lofexidine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.01",
      "Brand Drug Name": "Abstral (fentanyl)",
      "Full Policy": "Abstral (fentanyl sublingual tablets)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.02",
      "Brand Drug Name": "Actiq (fentanyl)",
      "Full Policy": "Actiq (oral transmucosal fentanyl citrate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.03",
      "Brand Drug Name": "Amerge",
      "Full Policy": "Amerge (naratriptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.04",
      "Brand Drug Name": "Arcalyst",
      "Full Policy": "Arcalyst (rilonacept)",
      "CPT": "",
      "HCPCS": "J2793",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.05",
      "Brand Drug Name": "Axert",
      "Full Policy": "Axert (almotriptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.06",
      "Brand Drug Name": "Celebrex (celecoxib)",
      "Full Policy": "Celebrex (celecoxib)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.07",
      "Brand Drug Name": "Fentora (fentanyl)",
      "Full Policy": "Fentora (fentanyl buccal tablet)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.08",
      "Brand Drug Name": "Frova",
      "Full Policy": "Frova (frovatriptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.09",
      "Brand Drug Name": "Ilaris",
      "Full Policy": "Ilaris (canakinumab)",
      "CPT": "",
      "HCPCS": "J0638",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.10",
      "Brand Drug Name": "Sumatriptan Imitrex Treximet",
      "Full Policy": "Sumatriptan Tablets, Nasal Spray (Imitrex) and Nasal Powder (Onzetra Xsail) / sumatriptan and naproxen sodium (Treximet tablets)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.11",
      "Brand Drug Name": "Sumatriptan Injection",
      "Full Policy": "Sumatriptan Injection (Imitrex / Alsuma / Sumavel / Zembrace)",
      "CPT": "",
      "HCPCS": "J3030, J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.12",
      "Brand Drug Name": "Actemra",
      "Full Policy": "Actemra (tocilizumab)",
      "CPT": "",
      "HCPCS": "J3262",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.13",
      "Brand Drug Name": "Ketalar",
      "Full Policy": "Ketalar (ketamine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.14",
      "Brand Drug Name": "Krystexxa",
      "Full Policy": "Krystexxa (pegloticase)",
      "CPT": "",
      "HCPCS": "J2507",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.15",
      "Brand Drug Name": "Lazanda (fentanyl)",
      "Full Policy": "Lazanda (Fentanyl intranasal spray)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.16",
      "Brand Drug Name": "Maxalt",
      "Full Policy": "Maxalt / Maxalt-MLT (rizatriptan)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.17",
      "Brand Drug Name": "Onsolis (fentanyl)",
      "Full Policy": "Onsolis (fentanyl buccal soluble film)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.18",
      "Brand Drug Name": "Orencia",
      "Full Policy": "Orencia (abatacept)",
      "CPT": "",
      "HCPCS": "J0129",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.19",
      "Brand Drug Name": "Relpax",
      "Full Policy": "Relpax (eletriptan hydrobromide)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.20",
      "Brand Drug Name": "Butorphanol",
      "Full Policy": "Butorphanol (Stadol)",
      "CPT": "",
      "HCPCS": "J0595, S0012",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.21",
      "Brand Drug Name": "Subsys (fentanyl)",
      "Full Policy": "Subsys (fentanyl sublingual spray)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.22",
      "Brand Drug Name": "Zomig",
      "Full Policy": "Zomig / Zomig-ZMT (zolmitriptan)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.23",
      "Brand Drug Name": "Migraine Powders",
      "Full Policy": "Sumatriptan powder, Zolmitriptan powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.24",
      "Brand Drug Name": "Xeljanz",
      "Full Policy": "Xeljanz (tofacitinib)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.26",
      "Brand Drug Name": "Anti-Inflammatory Pain Powders",
      "Full Policy": "Celecoxib Powder, Flurbiprofen Powder, Ibuprofen Powder, Ketoprofen Powder, Meloxicam Powder, Tramadol Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.27",
      "Brand Drug Name": "Enbrel",
      "Full Policy": "Enbrel (etanercept)",
      "CPT": "",
      "HCPCS": "J1438",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.28",
      "Brand Drug Name": "Ketamine Powder",
      "Full Policy": "Ketamine Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.29",
      "Brand Drug Name": "Humira",
      "Full Policy": "Humira (adalimumab), Amjevita* (adalimumab- atto), Cyltezo* (adalimumab-adbm), Hyrimoz* (adalimumab-adaz)",
      "CPT": "",
      "HCPCS": "J0135",
      "Comments for Procedure codes": "Drugs with * are not yet on the Market",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.31",
      "Brand Drug Name": "Duragesic Patch",
      "Full Policy": "Duragesic Patch (fentanyl patch)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.32",
      "Brand Drug Name": "Suboxone Drug Class",
      "Full Policy": "Suboxone, Zubsolv, Bunavail, Buprenorphine sublingual tablets, Probuphine, Sublocade buprenorphine, buprenorphine with naloxone",
      "CPT": "",
      "HCPCS": "J0570, J0571, J0572, J0573, J0574, J0575, J0592",
      "Comments for Procedure codes": "(Note: Drugs will not stop for PA in C07)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.37",
      "Brand Drug Name": "Methotrexate Injections",
      "Full Policy": "Otrexup, Rasuvo (methotrexate)",
      "CPT": "",
      "HCPCS": "J9250, J9260",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.41",
      "Brand Drug Name": "Methadone",
      "Full Policy": "Dolophine (methadone oral tablets), Methadone Hydrochloride Intensol (methadone oral concentrate), Methadose Oral Concentrate (methadone oral concentrate), Methadose Oral Tablet (methadone oral tablets), Methadose Dispersible Tablets (tablets for oral suspension)",
      "CPT": "",
      "HCPCS": "J1230, J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.42",
      "Brand Drug Name": "Duexis (ibuprofen famotidine)",
      "Full Policy": "Duexis (ibuprofen and famotidine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.43",
      "Brand Drug Name": "Butrans (buprenorphine patch)",
      "Full Policy": "Butrans (buprenorphine patch)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.44",
      "Brand Drug Name": "Targiniq ER (oxycodone /naloxone)",
      "Full Policy": "Targiniq ER (oxycodone /naloxone extended-release)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.45",
      "Brand Drug Name": "Sprix (ketorolac)",
      "Full Policy": "Sprix Nasal Spray (ketorolac kromethamine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.46",
      "Brand Drug Name": "Zecuity (sumatriptan transdermal)",
      "Full Policy": "Zecuity (sumatriptan iontophoretic transdermal system)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "This is a patch and not the injection J3030",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.48",
      "Brand Drug Name": "Zurampic",
      "Full Policy": "Zurampic (lesinurad)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.49",
      "Brand Drug Name": "Anesthetic Powders",
      "Full Policy": "Lidocaine Powder, Prilocaine Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.50",
      "Brand Drug Name": "Kineret",
      "Full Policy": "Kineret (anakinra)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.51",
      "Brand Drug Name": "Simponi / Simponi ARIA",
      "Full Policy": "Simponi / Simponi ARIA (golimumab)",
      "CPT": "",
      "HCPCS": "J1602",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.53",
      "Brand Drug Name": "Otezla",
      "Full Policy": "Otezla (apremilast)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.54",
      "Brand Drug Name": "Lidocaine",
      "Full Policy": "Lidocaine (lidocaine injection)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.55",
      "Brand Drug Name": "Opioid Step Policy",
      "Full Policy": "Suboxone, Zubsolv, Bunavail, Probuphine and buprenorphine sublingual tablets and Naloxone. Methadone hydrochloride",
      "CPT": "",
      "HCPCS": "J0570, J0571, J0572, J0573, J0574, J0575, J1230, J8499",
      "Comments for Procedure codes": "(Note: Drugs will not stop for PA in C07)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.56",
      "Brand Drug Name": "Mometasone Powder",
      "Full Policy": "Mometasone Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.57",
      "Brand Drug Name": "Fentanyl Powder",
      "Full Policy": "Fentanyl Powder (fentanyl Citrate)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.58",
      "Brand Drug Name": "Butalbital Analgesics",
      "Full Policy": "Allzital (butalbital-acetaminophen), butalbital-aspirin-caffeine, butalbital-aspirin-caffeine-codeine, butalbital-acetaminophen, butalbital-acetaminophen-caffeine, butalbital-acetaminophen-caffeine-codeine, Vanatol LQ (butalbital-acetaminophen-caffeine liquid oral solution)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.60",
      "Brand Drug Name": "Migranal",
      "Full Policy": "Migranal Nasal Spray (dihydroergotamine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.61",
      "Brand Drug Name": "Extended Release Opioid Drugs",
      "Full Policy": "Belbuca (buprenorphine), Hysingla ER, Zohydro ER (hydrocodone ER), Exalgo (hydromorphone ER), Arymo ER, Avinza, Kadian, MorphaBond, MS Contin (morphine sulfate ER), Embeda (morphine sulfate/naltrexone ER), OxyContin, Xtampza ER (oxycodone ER), Opana ER (oxymorphone ER) Nucynta ER (tapentadol ER), Conzip, Ultram ER (tramadol ER)",
      "CPT": "",
      "HCPCS": "J2410, J3490, J8499, Q9991, Q9992",
      "Comments for Procedure codes": "J1170, J2274 will be removed from PA, Targiniq ER (oxycodone/naloxone ER), Troxyca ER (oxycodone/naltrexone ER),  Xartemis XR (oxycodone /acetaminophen), Vantrela ER (removed from the market)",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.62",
      "Brand Drug Name": "Kevzara",
      "Full Policy": "Kevzara (sarilumab)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.63",
      "Brand Drug Name": "Duzallo",
      "Full Policy": "Duzallo (lesinurad and allopurinol)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.64",
      "Brand Drug Name": "Opioid Powders",
      "Full Policy": "Buprenorphine Powder, Butorphanol Powder, Codeine Powder, Hydrocodone Powder, Hydromorphone Powder, Levorphanol Powder, Meperidine Powder, Methadone Powder, Morphine Powder, Oxycodone Powder, Oxymorphone Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.65",
      "Brand Drug Name": "Zilretta",
      "Full Policy": "Zilretta (triamcinolone injectable suspension)",
      "CPT": "",
      "HCPCS": "J3304",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.66",
      "Brand Drug Name": "Opioid Cough Medications",
      "Full Policy": "Codeine with phenylephrine and promethazine, Codeine with promethazine, FlowTuss (hydrocodone bitartrate, guaifenesin), Hycofenix (hydrocodone bitartrate, pseudoephedrine, guaifenesin), Hydromet (hydrocodone bitartrate, homatropine), Obredon (hydrocodone bitartrate, guaifenesin),  TussiCaps (hydrocodone polistirex, chlorphineramine polistirex), Tussigon (hydrocodone bitartrate, homatropine), Tussionex Pennkinetic (hydrocodone bitartrate, chlorpheniramine), Tuzistra XR (codeine, chlorpheniramine), Zutripro (hydrocodone bitartrate, pseudoephedrine, chlorpheniramine),Tuxarin ER (codeine, chlorpheniramine )",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 03/15/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.67",
      "Brand Drug Name": "IR Opioid Combo Drugs",
      "Full Policy": "Apadaz* (benzhydrocodone-acetaminophen), Codeine-acetaminophen, Dihydrocodeine-caffeine-acetaminophen, Hydrocodone-acetaminophen, Hydrocodone-ibuprofen, Oxycodone-acetaminophen, Oxycodone-aspirin, Oxycodone-ibuprofen, Tramadol-acetaminophen",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.68",
      "Brand Drug Name": "Migraine CGRP Antagonists",
      "Full Policy": "Migraine CGRP Antagonists (Aimovig, Ajovy, Emgality)",
      "CPT": "",
      "HCPCS": "J3590, C9040",
      "Comments for Procedure codes": "New code eff 04/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.69",
      "Brand Drug Name": "Olumiant",
      "Full Policy": "Olumiant (baricitinib)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.70.70",
      "Brand Drug Name": "Immediate Release Opioid Drugs",
      "Full Policy": "Codeine, Demerol (meperidine), Dilaudid IR (hydromorphone IR), Levorphanol, Morphine IR, Nucynta IR (tapentadol IR), Opana IR (oxymorphone IR), Oxycodone IR, Pentazocine-Naloxone, Ultram (tramadol IR)",
      "CPT": "",
      "HCPCS": "J3490, J1960, J2175, J2410",
      "Comments for Procedure codes": "J1170, will be removed from PA,",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.01",
      "Brand Drug Name": "Botox",
      "Full Policy": "Botox (onabotulinum toxin A)",
      "CPT": "",
      "HCPCS": "J0585",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.02",
      "Brand Drug Name": "Dysport",
      "Full Policy": "Dysport (abobotulinum toxin A)",
      "CPT": "",
      "HCPCS": "J0586",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.03",
      "Brand Drug Name": "Myobloc",
      "Full Policy": "Myobloc (rimabotulinumtoxin B)",
      "CPT": "",
      "HCPCS": "J0587",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.04",
      "Brand Drug Name": "Xeomin",
      "Full Policy": "Xeomin (incobotulinumtoxinA)",
      "CPT": "",
      "HCPCS": "J0588",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.05",
      "Brand Drug Name": "Sabril",
      "Full Policy": "Sabril (vigabatrin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.06",
      "Brand Drug Name": "Topiramate Powder",
      "Full Policy": "Topiramate powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.07",
      "Brand Drug Name": "Soma",
      "Full Policy": "Soma (carisoprodol), Soma Compound (carisoprodol and aspirin), Soma Compound w/ Codeine (carisoprodol and aspirin and codeine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.08",
      "Brand Drug Name": "Cyclobenzaprine Powder",
      "Full Policy": "Cyclobenzaprine Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.09",
      "Brand Drug Name": "Hyaluronic Acid Derivatives",
      "Full Policy": "Euflexxa, Gel-ONE, Gel-Syn 3, Hymovis, Hyalgan, Monovisc, Orthovisc, Supartz, Synvisc, Synvisc-ONE, Durolane, Visco-3, Trivisk",
      "CPT": "",
      "HCPCS": "J7318, J7320, J7321, J7322,  J7323, J7324, J7325, J7326, J7327, J7328, J7329, Q9980",
      "Comments for Procedure codes": "Added code J7327",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.10",
      "Brand Drug Name": "Hyaluronate",
      "Full Policy": "Hyaluronate Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.11",
      "Brand Drug Name": "Baclofen Powder",
      "Full Policy": "Baclofen Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.12",
      "Brand Drug Name": "Tizanidine Powder",
      "Full Policy": "Tizanidine powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.13",
      "Brand Drug Name": "Gabapentin Powder",
      "Full Policy": "Gabapentin Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.14",
      "Brand Drug Name": "Exondys 51",
      "Full Policy": "Exondys 51 (eteplirsen)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.15",
      "Brand Drug Name": "Spinraza",
      "Full Policy": "Spinraza (nusinersen)",
      "CPT": "",
      "HCPCS": "J2326",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.16",
      "Brand Drug Name": "Emflaza",
      "Full Policy": "Emflaza (deflazacort)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.17",
      "Brand Drug Name": "Gabapentin",
      "Full Policy": "Gabapentin (Gralise, Horizant, Neurontin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.18",
      "Brand Drug Name": "Lyrica",
      "Full Policy": "Lyrica, Lyrica CR (pregabalin)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.19",
      "Brand Drug Name": "Savella",
      "Full Policy": "Savella (milnacipran)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.20",
      "Brand Drug Name": "Radicava",
      "Full Policy": "Radicava (edaravone)",
      "CPT": "",
      "HCPCS": "J1301",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.21",
      "Brand Drug Name": "Amantadine Extended-Release",
      "Full Policy": "Gocovri, Osmolex ER",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.22",
      "Brand Drug Name": "Epidiolex",
      "Full Policy": "Epidiolex (cannabidiol)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.23",
      "Brand Drug Name": "Onpattro",
      "Full Policy": "Onpattro (patisiran)",
      "CPT": "",
      "HCPCS": "C9036",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.25",
      "Brand Drug Name": "Tegsedi",
      "Full Policy": "Tegsedi (inotersen)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.75.26",
      "Brand Drug Name": "Firdapse",
      "Full Policy": "Firdapse (amifampridine)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "Added to PA 01/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.80.01",
      "Brand Drug Name": "Medical Foods",
      "Full Policy": "Medical Foods",
      "CPT": "",
      "HCPCS": "N/A",
      "Comments for Procedure codes": "Pharmacy only benefit",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.01",
      "Brand Drug Name": "Aranesp",
      "Full Policy": "Aranesp (darbepoetin alfa)",
      "CPT": "",
      "HCPCS": "J0881, J0882",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.02",
      "Brand Drug Name": "Berinert",
      "Full Policy": "Berinert (C1 esterase inhibitor [human])",
      "CPT": "",
      "HCPCS": "J0597",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.03",
      "Brand Drug Name": "Ceprotin",
      "Full Policy": "Ceprotin (protein C)",
      "CPT": "",
      "HCPCS": "J2724",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.04",
      "Brand Drug Name": "Cerezyme",
      "Full Policy": "Cerezyme (imiglucerase)",
      "CPT": "",
      "HCPCS": "J1786",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.05",
      "Brand Drug Name": "Cinryze",
      "Full Policy": "Cinryze (C1 esterase inhibitor [human])",
      "CPT": "",
      "HCPCS": "J0598",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.06",
      "Brand Drug Name": "Epogen Procrit",
      "Full Policy": "Epogen, Procrit (epoetin alfa), Retacrit (epoetin alfa – epbx)",
      "CPT": "",
      "HCPCS": "Q4081, J0885, Q5105, Q5106",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.07",
      "Brand Drug Name": "Kalbitor",
      "Full Policy": "Kalbitor (ecallantide)",
      "CPT": "",
      "HCPCS": "J1290",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.08",
      "Brand Drug Name": "Leukine",
      "Full Policy": "Leukine (sargramostim)",
      "CPT": "",
      "HCPCS": "J2820",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.09",
      "Brand Drug Name": "Neulasta",
      "Full Policy": "Neulasta (pegfilgrastim), Fulphila (pegfilgrastim-jmdb), Udenyca (biosimilar)",
      "CPT": "",
      "HCPCS": "J2505, Q5108, Q5111",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.10",
      "Brand Drug Name": "Neupogen Granix Nivestym Zarxio",
      "Full Policy": "Neupogen (filgrastim), Granix (tbo-filgrastim), Nivestym (filgrastim-aafi), Zarxio (filgrastim-sndz)",
      "CPT": "",
      "HCPCS": "J1442, J1447, Q5110",
      "Comments for Procedure codes": "Q5101 will be removed from PA",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.11",
      "Brand Drug Name": "Soliris",
      "Full Policy": "Soliris (eculizumab)",
      "CPT": "",
      "HCPCS": "J1300",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.12",
      "Brand Drug Name": "VPRIV",
      "Full Policy": "VPRIV (velaglucerase alfa)",
      "CPT": "",
      "HCPCS": "J3385",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.13",
      "Brand Drug Name": "Durlaza",
      "Full Policy": "Durlaza (aspirin)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.14",
      "Brand Drug Name": "Elelyso",
      "Full Policy": "Elelyso (taliglucerase alfa)",
      "CPT": "",
      "HCPCS": "J3060",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.15",
      "Brand Drug Name": "Promacta",
      "Full Policy": "Promacta (eltrombopag)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.17",
      "Brand Drug Name": "Ruconest",
      "Full Policy": "Ruconest (C1 esterase inhibitor [recombinant])",
      "CPT": "",
      "HCPCS": "J0596",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.18",
      "Brand Drug Name": "Cerdelga",
      "Full Policy": "Cerdelga (eliglustat)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.19",
      "Brand Drug Name": "Zavesca",
      "Full Policy": "Zavesca (miglustat)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.20",
      "Brand Drug Name": "Nplate",
      "Full Policy": "Nplate (romiplostim)",
      "CPT": "",
      "HCPCS": "J2796",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.21",
      "Brand Drug Name": "Mircera",
      "Full Policy": "Micera (methoxy polyethylene glycol-epoetin beta)",
      "CPT": "",
      "HCPCS": "J0887, J0888",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.23",
      "Brand Drug Name": "Firazyr",
      "Full Policy": "Firazyr (icatibant)",
      "CPT": "",
      "HCPCS": "J1744",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.24",
      "Brand Drug Name": "Yosprala",
      "Full Policy": "Yosprala (aspirin with omeprazole)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.25",
      "Brand Drug Name": "Endari",
      "Full Policy": "Endari (L-glutamine oral powder)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.26",
      "Brand Drug Name": "Haegarda",
      "Full Policy": "Haegarda (C1 esterase inhibitor [human])",
      "CPT": "",
      "HCPCS": "J0599",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.27",
      "Brand Drug Name": "Siklos",
      "Full Policy": "Siklos (hydroxyurea)",
      "CPT": "",
      "HCPCS": "J8999",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.29",
      "Brand Drug Name": "Tavalisse",
      "Full Policy": "Tavalisse (fostamatinib)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.30",
      "Brand Drug Name": "Doptelet",
      "Full Policy": "Doptelet (avatrombopag)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.31",
      "Brand Drug Name": "Mulpleta",
      "Full Policy": "Mulpleta (lusutrombopag)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.32",
      "Brand Drug Name": "Takhzyro",
      "Full Policy": "Takhzyro (lanadelumab-flyo)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.33",
      "Brand Drug Name": "Ultomiris",
      "Full Policy": "Ultomiris (ravulizumab-cwvz)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 01/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.85.34",
      "Brand Drug Name": "Cablivi",
      "Full Policy": "Cablivi (caplacizumab-yhdp)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 03/29/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.01",
      "Brand Drug Name": "Mirvaso",
      "Full Policy": "Mirvaso (brimonidine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.02",
      "Brand Drug Name": "Tazarotene",
      "Full Policy": "Tazorac (tazarotene), Fabior (tazarotene), tazarotene powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.03",
      "Brand Drug Name": "Tretinoin",
      "Full Policy": "Atralin (tretinoin)/ Avita (tretinoin)/ Differin (adapalene)/ Epiduo (adapalene+ benzoyl peroxide)/ Refissa (tretinoin)/ Renova (tretinoin)/ Retin-A (tretinoin)/ Tretin-X (tretinoin)/ Veltin (tretinoin + clindamycin)/ Ziana(tretinoin + clindamycin phosphate), Altreno lotion",
      "CPT": "",
      "HCPCS": "S0117, J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.04",
      "Brand Drug Name": "Stelara",
      "Full Policy": "Stelara (ustekinumab)",
      "CPT": "",
      "HCPCS": "J3357, J3358",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.05",
      "Brand Drug Name": "Jetrea",
      "Full Policy": "Jetrea (ocriplasmin)",
      "CPT": "",
      "HCPCS": "J7316",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.06",
      "Brand Drug Name": "Regranex",
      "Full Policy": "Regranex (becaplermin)",
      "CPT": "",
      "HCPCS": "S0157",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.07",
      "Brand Drug Name": "Lidoderm Patches",
      "Full Policy": "Lidoderm Patches (lidocaine patch 5%), ZTLido (lidocaine topical system 1.8%)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.08",
      "Brand Drug Name": "Zyclara",
      "Full Policy": "Zyclara (imiquimod)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.09",
      "Brand Drug Name": "Topical Antifungals",
      "Full Policy": "Jublia (efinaconazole), Kerydin (tavaborole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.10",
      "Brand Drug Name": "Luzu",
      "Full Policy": "Luzu (luliconazole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.11",
      "Brand Drug Name": "Cosentyx",
      "Full Policy": "Cosentyx (secukinumab)",
      "CPT": "",
      "HCPCS": "J3590",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.12",
      "Brand Drug Name": "Ecoza",
      "Full Policy": "Ecoza (econazole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.13",
      "Brand Drug Name": "Oxistat",
      "Full Policy": "Oxistat (oxiconazole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.14",
      "Brand Drug Name": "Exelderm",
      "Full Policy": "Exelderm (sulconazole nitrate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.15",
      "Brand Drug Name": "Ertaczo",
      "Full Policy": "Ertaczo (sertaconazole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.16",
      "Brand Drug Name": "Solaraze",
      "Full Policy": "Solaraze (diclofenac sodium)",
      "CPT": "",
      "HCPCS": "J1130",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.17",
      "Brand Drug Name": "Oral Rinses",
      "Full Policy": "Aquoral, Caphosol, Episil, Gelclair, Gelx, Mucotrol, Mugard, Neutrasal, Numoisyn, Oramagic Rx, SalivaMAX/Salivate RX, Bocasal, Salicept",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.18",
      "Brand Drug Name": "Taltz",
      "Full Policy": "Taltz (ixekizumab)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.19",
      "Brand Drug Name": "Aldara",
      "Full Policy": "Aldara (imiquimod)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.20",
      "Brand Drug Name": "Lidocaine Topicals",
      "Full Policy": "Emla (lidocaine 2.5% and prilocaine 2.5%), Lidocaine Topical 5%, Pliaglis Cream (lidocaine 7% and tetracaine 7%), Tetravex Gel (tetracaine 2%)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.21",
      "Brand Drug Name": "Aminolevulinic Acid",
      "Full Policy": "Ameluz Gel, Levulan Kerastick (aminolevulinic acid)",
      "CPT": "",
      "HCPCS": "J7308, J7345",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.22",
      "Brand Drug Name": "Restasis",
      "Full Policy": "Restasis (cyclosporine ophthalmic solution)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.23",
      "Brand Drug Name": "Xiidra",
      "Full Policy": "Xiidra (lifitegrast ophthalmic solution)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.24",
      "Brand Drug Name": "Topical Anti-Inflammatories",
      "Full Policy": "Alcortin A (iodoquinol and hydrocortisone), Novacort (hydrocortisone and pramoxine)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.25",
      "Brand Drug Name": "Eucrisa",
      "Full Policy": "Eucrisa (crisaborole)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.26",
      "Brand Drug Name": "Ophthalmic VEGF Inhibitors",
      "Full Policy": "Eylea (aflibercept), Macugen (pegaptanib)",
      "CPT": "",
      "HCPCS": "J0178, J2503",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.27",
      "Brand Drug Name": "Doxepin Cream 5%",
      "Full Policy": "Doxepin Cream 5% (Prudoxin, Zonalon)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.28",
      "Brand Drug Name": "Siliq",
      "Full Policy": "Siliq (brodalumab)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.29",
      "Brand Drug Name": "Lucentis",
      "Full Policy": "Lucentis (ranibizumab)",
      "CPT": "",
      "HCPCS": "J2778",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.30",
      "Brand Drug Name": "Dupixent",
      "Full Policy": "Dupixent (dupilumab)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.31",
      "Brand Drug Name": "Santyl",
      "Full Policy": "Santyl (collagenase)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.32",
      "Brand Drug Name": "Tremfya",
      "Full Policy": "Tremfya (guselkumab)",
      "CPT": "",
      "HCPCS": "J1628",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.33",
      "Brand Drug Name": "Luxturna",
      "Full Policy": "Luxturna (voretigene neparvovec-rzyl)",
      "CPT": "",
      "HCPCS": "J3398",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.34",
      "Brand Drug Name": "Topical Products with Quantity Limits",
      "Full Policy": "Diprosone Ointment 0.05% (betamethasone dipropionate), Dovonex Cream 0.005% (calcipotriene), Lidex-E Cream 0.05% (fluocinonide), Pennsaid Topical Solution 1.5% (diclofenac sodium), Taclonex Ointment 0.005%/0.064% (calcipotriene and betamethasone dipropionate), Vanos Cream 0.1% (fluocinonide), Voltaren Gel 1% (diclofenac sodium), Apexicon E (diflorasone diacetate) and Locoid (hydrocortisone butyrate)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 03/01/2019",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.35",
      "Brand Drug Name": "Ilumya",
      "Full Policy": "Ilumya (tildrakizumab - asmn)",
      "CPT": "",
      "HCPCS": "J3245",
      "Comments for Procedure codes": "New code eff 01/01/19",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.90.36",
      "Brand Drug Name": "Oxervate",
      "Full Policy": "Oxervate (cenegermin-bkbj)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "Added to PA 12/14/2018",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.01",
      "Brand Drug Name": "Benlysta",
      "Full Policy": "Benlysta (belimumab)",
      "CPT": "",
      "HCPCS": "J0490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.02",
      "Brand Drug Name": "Exjade Jadenu",
      "Full Policy": "Exjade (tablets for oral suspension), Jadenu (deferasirox)",
      "CPT": "",
      "HCPCS": "J8499",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.03",
      "Brand Drug Name": "Evzio",
      "Full Policy": "Evzio (naloxone injection)",
      "CPT": "",
      "HCPCS": "J2310",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.06",
      "Brand Drug Name": "Xiaflex",
      "Full Policy": "Xiaflex (collagenase clostridium histolyticum)",
      "CPT": "",
      "HCPCS": "J0775",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.08",
      "Brand Drug Name": "Diabetic Test Strips",
      "Full Policy": "Diabetic Test Strips",
      "CPT": "",
      "HCPCS": "A4253",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.09",
      "Brand Drug Name": "Ferriprox (deferiprone)",
      "Full Policy": "Ferriprox (deferiprone)",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.10",
      "Brand Drug Name": "Compound High Dollar Limit",
      "Full Policy": "Compound High Dollar Limit",
      "CPT": "",
      "HCPCS": "No available code",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.11",
      "Brand Drug Name": "Fluticasone Powder",
      "Full Policy": "Fluticasone Powder",
      "CPT": "",
      "HCPCS": "J3490",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.13",
      "Brand Drug Name": "Compounding Kits",
      "Full Policy": "Compounding Kits",
      "CPT": "",
      "HCPCS": "No available code",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.14",
      "Brand Drug Name": "Continuous Glucose Monitors (CGM)",
      "Full Policy": "Dexcom G5 CGM System, Dexcom G6 CGM System, Freestyle Libre 10 day CGM System, Freestyle Libre 14 day CGM System",
      "CPT": "",
      "HCPCS": "A9277, A9278, K0554, S1030, S1031",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "5.99.15",
      "Brand Drug Name": "CGM Supplies",
      "Full Policy": "CGM Supplies",
      "CPT": "",
      "HCPCS": "A9276, K0553",
      "Comments for Procedure codes": "",
      "ICD10": "",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.01",
      "Brand Drug Name": "",
      "Full Policy": "Bone Mineral Density Studies",
      "CPT": "77078, 77080, 77081, 76977, 78350, 78351, 0508T, 0554T-0558T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Archive Policy 04/01/2019               New codes eff 07/01/2019",
      "ICD10": "M81.0, M81.6, M81.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.03",
      "Brand Drug Name": "",
      "Full Policy": "Computed Tomography to Detect Coronary Artery Calcification",
      "CPT": "75571, 75572, 75573, 75574",
      "HCPCS": "S8092",
      "Comments for Procedure codes": "",
      "ICD10": "I25.10-I25.119, I25.700-I25.799, Z13.6",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.06",
      "Brand Drug Name": "",
      "Full Policy": "Miscellaneous (Noncardiac, Nononcologic) Applications of Fluorine 18 Fluorodeoxyglucose Positron Emission Tomography",
      "CPT": "78608, 78609, 78811, 78812, 78813, 78814, 78815, 78816",
      "HCPCS": "A9526, A9552, A9580, G0235",
      "Comments for Procedure codes": "",
      "ICD10": "G40.001-G40-919, M86.30-M86.69",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.12",
      "Brand Drug Name": "",
      "Full Policy": "Thermography",
      "CPT": "93740, 93799",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G56.40-G56.42, G57.70-G57.72, G89.0-G89.4, G90.50-G90.59, M25.50-M25.579, M54.00-M54.9, M79.60-M79.676, R52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.20",
      "Brand Drug Name": "",
      "Full Policy": "Cardiac Applications of Positron Emission Tomography Scanning",
      "CPT": "78459, 78491, 78492, 0482T",
      "HCPCS": "A9552, A9555, A9526",
      "Comments for Procedure codes": "",
      "ICD10": "D86.85, I25.10-I25.119, I51.9, I50.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.24",
      "Brand Drug Name": "",
      "Full Policy": "Magnetic Resonance Spectroscopy",
      "CPT": 76390,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C50.11-C50.929, C61, C71.0-C71.9, F01.50-F03, G35, K70.0-K77",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.26",
      "Brand Drug Name": "",
      "Full Policy": "Oncologic Applications of PET Scanning",
      "CPT": "78811, 78812, 78813, 78814, 78815, 78816, 78608, 78609",
      "HCPCS": "A9515, A9526, A9552, A9580, A9587, A9588, A9598, G0219, G0235, G0252",
      "Comments for Procedure codes": "Useful Modifiers which may be reported. PI, PS",
      "ICD10": "C25.0-C25.9, C30.0-C31.9, C32.0-C32.9,C34.0-C34.92, C40.0-C41.9, C43.0-C43.9, C50.011-C50.929, C56.0-C56.9, C62.00-C62.92, C73, C76.0, C80.0-C80.1, C81.00-C81.99, C82.00-C88.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.32",
      "Brand Drug Name": "",
      "Full Policy": "Virtual Colonoscopy/Computed Tomography Colonography",
      "CPT": "74261, 74262, 74263",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C18.0-C18.9, C19, Z12.10-Z12.13, Z15.09, Z80.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.33",
      "Brand Drug Name": "",
      "Full Policy": "Wireless Capsule Endoscopy to Diagnose Disorders of the Small Bowel, Esophagus, and Colon",
      "CPT": "91110, 91111, 0355T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D13.2-D13.39, K50.00-K50.919, K92.0-K92.2, Q85.0-Q85.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.38",
      "Brand Drug Name": "",
      "Full Policy": "Percutaneous Balloon Kyphoplasty and Mechanical Verebral Augmentation",
      "CPT": "22513, 22514, 22515,",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C41.2, C79.51-C75.52, C90.00-C90.02, D18.09, D47.Z9, M48.50-M48.58, M80.08, M84.48, M84.58, M84.68",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.40",
      "Brand Drug Name": "",
      "Full Policy": "Whole Body Dual X-Ray Absorptiometry to Determine Body Composition",
      "CPT": 76499,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.43",
      "Brand Drug Name": "",
      "Full Policy": "Contrast-Enhanced Coronary Computed Tomography Angiography for Coronary Artery Evaluation",
      "CPT": 75574,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I25.10, I25.810-I25.812",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.51",
      "Brand Drug Name": "",
      "Full Policy": "Interim Positron Emission Tomography Scanning in Oncology to Detect Early Response During Treatment",
      "CPT": "78811, 78812, 78813, 78814, 78815, 78816",
      "HCPCS": "G0235",
      "Comments for Procedure codes": "Useful Modifiers which may be reported. PS",
      "ICD10": "C00.0-C14.8, C15.3-C15.9, C18.0-C18.9, C19, C25.0-C25.9, C30.0-C31.9, C32.0-C32.9, C34.0-C34.92, C43.0-C43.9, C50.011-C50.929, C53.0-C53.9, C56.0-C56.9, C62.00-C62.92, C73, C76.0, C80.0-C80.1, C81.00-C81.99, C82.00-C88.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.52",
      "Brand Drug Name": "",
      "Full Policy": "Positron Emission Mammography",
      "CPT": "78999, 78811",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes for PEM may reported as shown",
      "ICD10": "C50.011-C50.929, C79.81, D05.01-D05.99, R92.0-R92.8, Z12.31; Z12.39, Z85.3, Z85.43, Z80.3",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.54",
      "Brand Drug Name": "",
      "Full Policy": "Dopamine Transporter Imaging With Single-Photon Emission Computed Tomography",
      "CPT": 78607,
      "HCPCS": "A9584",
      "Comments for Procedure codes": "",
      "ICD10": "G20, G21.0-G21.9, G31.83",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.55",
      "Brand Drug Name": "",
      "Full Policy": "Beta Amyloid Imaging with Positron Emission Tomography for Alzheimer's Disease",
      "CPT": "78811, 78814",
      "HCPCS": "A9586, A9599, Q9982, Q9983",
      "Comments for Procedure codes": "",
      "ICD10": "F01.50-F03.91, G30.0-G30.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "6.01.59",
      "Brand Drug Name": "",
      "Full Policy": "Coronary Computed Tomography Angiography With Selective Noninvasive Fractional Flow Reserve to Guide Use of Invasive Coronary Angiography",
      "CPT": "0501T, 0502T, 0503T, 0504T, 75574",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I20.9, I25.118-I25.119",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.07",
      "Brand Drug Name": "",
      "Full Policy": "Electrical Bone Growth Stimulation of the Appendicular Skeleton",
      "CPT": "20974, 20975",
      "HCPCS": "E0747, E0749",
      "Comments for Procedure codes": "",
      "ICD10": "Q74.0, S32.2xxK-S32.9xxK, S42.00xK-S42.92xK, S49.00xK-S49.199K, S52.00xK-S52.92xN, S59.00xK-S59.299K, S62.00xK-S62.92xK, S72.00xK-S72.92xN, S79.00xK-S79.199K, S82.00xK-S82.92Xn, S89.00xK-S89.399K, S92.00xK-S92.919K",
      "Comments for ICD10's": "7th digit “K” is subsequent encounter for nonunion (in forearm, femur, lower leg & ankle fractures 7th digits “M” and “N” are also nonunion for certain types of open fractures – in fractures of the shoulder, humerus, wrist, hand and foot there isn’t separation of open vs. closed nonunions)"
    },
    {
      "Policy #": "7.01.101",
      "Brand Drug Name": "",
      "Full Policy": "Surgical Treatment of Snoring and Obstructive Sleep Apnea Syndrome",
      "CPT": "21199, 41512, 41530, 42145, 42299, 42820, 42821, 42825, 42826, 42830, 42831, 42835, 42836, 0466T, 0467T, 0468T",
      "HCPCS": "S2080, C9727",
      "Comments for Procedure codes": "",
      "ICD10": "G47.30-G47.39",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.102",
      "Brand Drug Name": "",
      "Full Policy": "Periureteral Bulking Agents as a Treatment of Vesicoureteral Reflux",
      "CPT": 52327,
      "HCPCS": "L8604",
      "Comments for Procedure codes": "",
      "ICD10": "N11.0, N13.70-N13.739",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.104",
      "Brand Drug Name": "",
      "Full Policy": "Subtalar Arthroereisis",
      "CPT": "0335T, 0510T, 0511T",
      "HCPCS": "S2117",
      "Comments for Procedure codes": "",
      "ICD10": "M21.40-M21.42",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.105",
      "Brand Drug Name": "",
      "Full Policy": "Balloon Ostia Dilation for Treatment of Chronic Sinusitis",
      "CPT": "31253, 31256, 31257, 31259, 31267, 31276, 31287, 31288,  31295, 31296, 31297, 31298,",
      "HCPCS": "C1726",
      "Comments for Procedure codes": "",
      "ICD10": "J32.0-J32.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.106",
      "Brand Drug Name": "",
      "Full Policy": "Percutaneous Tibial Nerve Stimulation",
      "CPT": 64566,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "N32.81, N39.41-N39.498, R33.0-R33.9, R35.0, R39.15",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.107",
      "Brand Drug Name": "",
      "Full Policy": "Interspinous and Interlaminar Stabilization/Distraction Devices (Spacers)",
      "CPT": "22867, 22868, 22869, 22870",
      "HCPCS": "C1821",
      "Comments for Procedure codes": "",
      "ICD10": "M48.00-M48.08",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.108",
      "Brand Drug Name": "",
      "Full Policy": "Artificial Intervertebral Disc: Cervical Spine",
      "CPT": "22856, 22858, 22861, 22864, 0095T, 0098T, 0375T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.109",
      "Brand Drug Name": "",
      "Full Policy": "Magnetic Resonance‒Guided Focused Ultrasound",
      "CPT": "0071T, 0072T",
      "HCPCS": "C9734",
      "Comments for Procedure codes": "",
      "ICD10": "C79.51, D25.0-D25.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.110",
      "Brand Drug Name": "",
      "Full Policy": "Vertical Expandable Prosthetic Titanium Rib",
      "CPT": 22899,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M41.00-M41.9, Q76.3, Q76.6, Q77.2, Q87.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.112",
      "Brand Drug Name": "",
      "Full Policy": "Transanal Endoscopic Microsurgery",
      "CPT": "0184T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C20, D12.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.113",
      "Brand Drug Name": "",
      "Full Policy": "Bio-Engineered Skin and Soft Tissue Substitutes",
      "CPT": "15040, 15050, 15100, 15101, 15110, 15111, 15115, 15116, 15120, 15121, 15130, 15131, 15135, 15136, 15150, 15152, 15155, 15156, 15157, 15200, 15201, 15220, 15240, 15241, 15260, 15261, 15271, 15272, 15273, 15274, 15275, 15276, 15277, 15278, 15777",
      "HCPCS": "A6460, A6461, C9354, C9356, C9358, C9360, C9363, C9364, Q4100, Q4101, Q4102, Q4103, Q4104, Q4105, Q4106, Q4107, Q4108, Q4110,Q4111, Q4112, Q4112, Q4113, Q4114, Q4115, Q4116, Q4117, Q4118, Q4121, Q4122, Q4123, Q4124, Q4125, Q4126, Q4127, Q4128, Q4130, Q4176, Q4177, Q4178, Q4179, Q4181, Q4182, Q4193, Q4195-Q4197, Q4200, Q4202, Q4203",
      "Comments for Procedure codes": "Useful Modifiers which may be reported JC, JD",
      "ICD10": "C50.011-C50.019, C50.111-C50.119, C50.211-C50.219, C50.311-C50.319, C50.411-C50.419, C50.511-C50.519, C50.611-C50.619, C50.811-C50.819, C50.911-C50.919, T34.011-T34.99, Z85.3, Z90.10-Z90.13",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.116",
      "Brand Drug Name": "",
      "Full Policy": "Facet Joint Denervation",
      "CPT": "64633, 64634, 64635, 64636, 64999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M47.011-M47.9, M54.10-M54.9, M96.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.118",
      "Brand Drug Name": "",
      "Full Policy": "Surgical Treatment of Femoroacetabular Impingement",
      "CPT": "29914, 22915, 22916, 27299",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M24.151-M24.159,M24.851-M24.859, M25.551-M25.559, M25.851-M25.859, M94.251-M94.259, S79.811A-S79.929S",
      "Comments for ICD10's": "No specific code. The following codes might be used:"
    },
    {
      "Policy #": "7.01.120",
      "Brand Drug Name": "",
      "Full Policy": "Facet Arthroplasty",
      "CPT": "0202T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.121",
      "Brand Drug Name": "",
      "Full Policy": "Saturation Biopsy for Diagnosis and Staging of Prostate Cancer",
      "CPT": "55706, 55700, 76942",
      "HCPCS": "G0416",
      "Comments for Procedure codes": "",
      "ICD10": "C61, D07.5, D40.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.122",
      "Brand Drug Name": "",
      "Full Policy": "Electromagnetic Navigation Bronchoscopy",
      "CPT": "31626, 31627",
      "HCPCS": "A4648",
      "Comments for Procedure codes": "",
      "ICD10": "C34.00-C34.92",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.123",
      "Brand Drug Name": "",
      "Full Policy": "Plugs for Fistula Repair",
      "CPT": 46707,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K60.0-K60.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.124",
      "Brand Drug Name": "",
      "Full Policy": "Treatment of Varicose Veins/Venous Insufficiency",
      "CPT": "36465, 36466,36468, 36470, 36471, 36473, 36474, 36475, 36476, 36478, 36479, 36482, 36483, 37500, 37700, 37718, 37722, 37735, 37760, 37761, 37765, 37766, 37780, 37785, 0524T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I83, I87",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.126",
      "Brand Drug Name": "",
      "Full Policy": "Image-Guided Minimally Invasive Decompression for Spinal Stenosis",
      "CPT": "0274T, 0275T, 72275",
      "HCPCS": "G0276",
      "Comments for Procedure codes": "",
      "ICD10": "M43.15-M43.17, M48.05-M48.07",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.127",
      "Brand Drug Name": "",
      "Full Policy": "Bronchial Thermoplasty",
      "CPT": "31660, 31661",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.128",
      "Brand Drug Name": "",
      "Full Policy": "Bronchial Valves",
      "CPT": "31647, 31651, 31648, 31649",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "J43.0-J43.9, J44.0-J44.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.13",
      "Brand Drug Name": "",
      "Full Policy": "Surgical Treatment of Bilateral Gynecomastia",
      "CPT": 19300,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "N62",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.130",
      "Brand Drug Name": "",
      "Full Policy": "Axial Lumbosacral Interbody Fusion",
      "CPT": "22586, 22899",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "0195T, 0196T (deleted eff 12/31/2018)",
      "ICD10": "M43.15-M43.16, M48.05-M48.06, M51.05-M51.06, M51.15-M51.16, M51.35-M51.36, M96.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.132",
      "Brand Drug Name": "",
      "Full Policy": "Transcatheter Aortic-Valve Implantation for Aortic Stenosis",
      "CPT": "33361, 33362, 33363, 33364, 33365, 33366",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I06.0-I06.9, I08.0; I08.2- I08.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.134",
      "Brand Drug Name": "",
      "Full Policy": "Implantable Sinus  Stents for Postoperative Use Following Endoscopic Sinus Surgery",
      "CPT": "31237, 31299",
      "HCPCS": "C1874, C2625, J3490, S1090",
      "Comments for Procedure codes": "0406T, 0407T (deleted eff 12/31/2018)",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.135",
      "Brand Drug Name": "",
      "Full Policy": "Surgical Deactivation of Headache Trigger Sites",
      "CPT": "15824, 15826, 30130, 30140, 30520, 64716, 67900",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "G43.001-G43.919",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.136",
      "Brand Drug Name": "",
      "Full Policy": "Radiofrequency Ablation of the Renal Sympathetic Nerves as a Treatment for Resistant Hypertension",
      "CPT": "0338T, 0339T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I10-I15.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.137",
      "Brand Drug Name": "",
      "Full Policy": "Magnetic Esophageal Sphincter Augmentation to Treat Gastroesophageal Reflux Disease",
      "CPT": "43284, 43285",
      "HCPCS": "C9737",
      "Comments for Procedure codes": "",
      "ICD10": "K21.0, K21.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.139",
      "Brand Drug Name": "",
      "Full Policy": "Peripheral Subcutaneous Field Stimulation",
      "CPT": 64999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.140",
      "Brand Drug Name": "",
      "Full Policy": "Handheld Radiofrequency Spectroscopy for Intraoperative Assessment of Surgical Margins during Breast-Conserving Surgery",
      "CPT": "0546T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 07/01/2019, prior to that dos use 19499",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.148",
      "Brand Drug Name": "",
      "Full Policy": "Endovascular Therapies for Extracranial Vertebral Artery Disease",
      "CPT": "0075T, 0076T, 36226, 36228",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I65.01-I65.09, I77.74",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.149",
      "Brand Drug Name": "",
      "Full Policy": "Amniotic Membrane and Amniotic Fluid Injections",
      "CPT": "No CPT",
      "HCPCS": "Q4132, Q4133, Q4134, Q4135, Q4136, Q4137, Q4138, Q4139, Q4140,  Q4141, Q4142,  Q4143, Q4145, Q4146, Q4147, Q4148, Q4149, Q4150, Q4151, Q4152, Q4153, Q4154, Q4155, Q4156, Q4157, Q4158, Q4159, Q4160, Q4161, Q4163, Q4164, Q4165, Q4166, Q4167, Q4168, Q4169, Q4170, Q4171, Q4173, Q4174, Q4175, Q4183-Q4192, Q4195, Q4198, Q4201, Q4204",
      "Comments for Procedure codes": "",
      "ICD10": "E08.621-E08.622; E09.621-E09.622; E10.621-E10.622; E11.621-E11.622:E13.621-E13.622; H11.001-H11.069; H16.001-H16.079; H16.231-H16.239; H18.831-H18.839; L51.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.15",
      "Brand Drug Name": "",
      "Full Policy": "Meniscal Allografts and Other Meniscus Implants",
      "CPT": 29868,
      "HCPCS": "G0428",
      "Comments for Procedure codes": "",
      "ICD10": "M23.000-M23.92, S83.200-S83.289, S83.30-S83.32",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.150",
      "Brand Drug Name": "",
      "Full Policy": "Vagal Nerve Blocking Therapy for Treatment of Obesity",
      "CPT": "0312T, 0313T, 0314T, 0315T, 0316T, 0317T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E66.01",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.151",
      "Brand Drug Name": "",
      "Full Policy": "Prostatic Urethral Lift",
      "CPT": "52441, 52442",
      "HCPCS": "C9739, C9740",
      "Comments for Procedure codes": "",
      "ICD10": "N40.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.153",
      "Brand Drug Name": "",
      "Full Policy": "Adipose-Derived Stem Cells in Autologous Fat Grafting to the Breast",
      "CPT": "19366, 19380, 19499, 20926",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes the following may be used",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.158",
      "Brand Drug Name": "",
      "Full Policy": "Balloon Dilation of the Eustachian Tube",
      "CPT": "No CPT",
      "HCPCS": "C9745",
      "Comments for Procedure codes": "",
      "ICD10": "H68.001-H68.029, H69.80-H69.93, H65.00- H65.93, H66.001-H66.93, H67.1-H67.9, H71.00-H71.93, H72.00-H72.93 , H81.01-H81.09, H81.311-H81.49, H91.01-H91.93, J30.0-J30.9, J31.0-J32.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.160",
      "Brand Drug Name": "",
      "Full Policy": "Synthetic Cartilage Implants for Joint Pain",
      "CPT": 28291,
      "HCPCS": "L8699",
      "Comments for Procedure codes": "",
      "ICD10": "M12.571-M12.579, M19.071-M19.079, M19.271-M19.279, M20.20-M20.22, M24.174-M24.176, M25.571-M25.579, M89.8X7, M94.8X7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.161",
      "Brand Drug Name": "",
      "Full Policy": "Three-Dimensional Printed Orthopedic Implants",
      "CPT": "0559T, 0560T, 0561T, 0562T",
      "HCPCS": "L8699",
      "Comments for Procedure codes": "New codes eff 07/01/2019",
      "ICD10": "C40.20-C40.22, C47.20-C47.22, C49.20 - C49.22, D16.20-D16.22, D21.20-D21.22, L40.50, M05.051 thru M97.12XS (please see MPP Policy for specific dx codes)",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.162",
      "Brand Drug Name": "",
      "Full Policy": "Surgical Treatments for Breast Cancer Related Lymphedema",
      "CPT": 38999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I89.0-I89.9, I97.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.163",
      "Brand Drug Name": "",
      "Full Policy": "Absorbable Nasal Implant for Treatment of Nasal Valve Collapse",
      "CPT": "No CPT",
      "HCPCS": "C9749",
      "Comments for Procedure codes": "",
      "ICD10": "J84.89, J84.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.18",
      "Brand Drug Name": "",
      "Full Policy": "Automated Percutaneous and Endoscopic Discectomy",
      "CPT": "62287, 62380, 0274T, 0275T",
      "HCPCS": "C2614",
      "Comments for Procedure codes": "",
      "ICD10": "M51.06, M51.07, M51.36, M51.37",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.19",
      "Brand Drug Name": "",
      "Full Policy": "Injectable Bulking Agents for the Treatment of Urinary and Fecal Incontinence",
      "CPT": "51715, 0377T",
      "HCPCS": "L8603, L8604, L8605, L8606",
      "Comments for Procedure codes": "",
      "ICD10": "N39.3, R15.0-R15.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.21",
      "Brand Drug Name": "",
      "Full Policy": "Reduction Mammaplasty for Breast-Related Symptoms",
      "CPT": 19318,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "N62",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.29",
      "Brand Drug Name": "",
      "Full Policy": "Percutaneous Electrical Nerve Stimulation and Percutaneous Neuromodulation Therapy",
      "CPT": 64999,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "G56.40-G56.42, G57.70-G57.72, G89.21-G89.8, G89.4, G90.50-G90.59, M25.50- M25.579, M54.10- M54.18, M54.30-M54.32, M54.40-M54.42, M54.5, M54.6, M54.81, M54.89, M54.9, M79.1, M79.60-M79.676, R52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.48",
      "Brand Drug Name": "",
      "Full Policy": "Autologous Chondrocyte Implantation for Focal Articular Cartilage Lesions",
      "CPT": "27412, 29870, 29871, 29873,  29874, 29875, 29876, 29877",
      "HCPCS": "J7330, S2112",
      "Comments for Procedure codes": "Do not apply to policy: 29879,  29880, 29881, 29882, 29883, 29884, 29885, 29886, 29887",
      "ICD10": "M17.0-M17.12, M17.4-M17.5, M17.9, M12.561-M12.569, M23.90-M23.92, M23.8x1-M23.8x9, M25.861-M25.869, M93.261-M93.269, M89.8x6, M94.8x6, S89.90-S89.92, S99.811-S99.929",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.54",
      "Brand Drug Name": "",
      "Full Policy": "Transmyocardial Revascularization",
      "CPT": "33140, 33141",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I20.0-I20.9, I25.10-125.119, I25.89, 125.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.58",
      "Brand Drug Name": "",
      "Full Policy": "Intraoperative Neurophysiologic Monitoring",
      "CPT": "92585, 95829, 95867, 95868, 95940, 95941, 95925, 95926, 95927, 95928, 95929, 95938, 95930, 95939, 95955",
      "HCPCS": "G0453",
      "Comments for Procedure codes": "",
      "ICD10": "C71.0-C71.9, C79.31-C79.32, D33.0-D33.9, D43.0-D43.9, D49.6, I71.00-I71.9, M50.00-M50.93, M48.00-M48.08, M40.00-M40.57, M41.00-M41.9, I65.01-I65.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.67",
      "Brand Drug Name": "",
      "Full Policy": "Endovascular Grafts for Abdominal Aortic Aneurysms",
      "CPT": "34701-34711, 34812, 34820, 34830, 34831, 34832, 34839, 34841, 34842, 34843, 34844, 34845, 34846, 34847, 34848, 36200, 36245, 0254T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Note: 0245T has been corrected to 0254T",
      "ICD10": "I71.3, I71.4",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.68",
      "Brand Drug Name": "",
      "Full Policy": "Extracranial Carotid Artery Stenting",
      "CPT": "37215, 37216, 37217",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I65.21-I65.29, I65.8, I63.59",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.72",
      "Brand Drug Name": "",
      "Full Policy": "Percutaneous Intradiscal Electrothermal Annuloplasty, Radiofrequency Annuloplasty, and Biacuplasty",
      "CPT": "22526, 22527",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.73",
      "Brand Drug Name": "",
      "Full Policy": "Gastric Electrical Stimulation",
      "CPT": "43647, 43648, 43881, 43882, 64590, 64595, 95980, 95981, 95982",
      "HCPCS": "L8680, L8685, L8686, L8687, L8688",
      "Comments for Procedure codes": "",
      "ICD10": "E08.43, E09.43, E10.43, E11.43, E13.43, K31.89",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.75",
      "Brand Drug Name": "",
      "Full Policy": "Cryosurgical Ablation of Primary or Metastatic Liver Tumors",
      "CPT": "47371, 47381, 47383, 76940",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C22.0-C22.9, C78.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.81",
      "Brand Drug Name": "",
      "Full Policy": "Nerve Graft in Association with Radical Prostatectomy",
      "CPT": "55840, 55842, 55845, 64912, 64913, 64999",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C61, N52.01-N52.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.84",
      "Brand Drug Name": "",
      "Full Policy": "Semi-Implantable and Fully Implantable Middle Ear Hearing Aids",
      "CPT": 69799,
      "HCPCS": "S2230, V5095",
      "Comments for Procedure codes": "",
      "ICD10": "H90.3, H90.41-H90.42, H90.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.85",
      "Brand Drug Name": "",
      "Full Policy": "Electrical Stimulation of the Spine as an Adjunct to Spinal Fusion Procedures",
      "CPT": "20974, 20975",
      "HCPCS": "E0748, E0749",
      "Comments for Procedure codes": "",
      "ICD10": "M43.15-M43.17, M48.05-M48.07, M51.04-M51.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.87",
      "Brand Drug Name": "",
      "Full Policy": "Artificial Intervertebral Disc: Lumbar Spine",
      "CPT": "22857, 22862, 22865, 0163T, 0164T, 0165T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M51.05-M51.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.91",
      "Brand Drug Name": "",
      "Full Policy": "Radiofrequency Ablation of Primary or Metastic Liver Tumors",
      "CPT": "47370, 47380, 47382, 76940",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C22.0, C22.9, C7b.02, C78.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.92",
      "Brand Drug Name": "",
      "Full Policy": "Cryosurgical Ablation of Miscellaneous Solid Tumors Other Than Liver, Prostate or Dermatologic Tumors",
      "CPT": "19105, 20983, 32994, 50250, 50542, 50593",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C64.0-C65.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.93",
      "Brand Drug Name": "",
      "Full Policy": "Decompression of the Intervertebral Disc Using Laser Energy (Laser Discectomy) or RadioFrequency Coblation (Nucleoplasty)",
      "CPT": "62287, 77002",
      "HCPCS": "S2348",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.95",
      "Brand Drug Name": "",
      "Full Policy": "Radiofrequency Ablation of Miscellaneous Solid Tumors Excluding Liver Tumors",
      "CPT": "20982, 32998, 41530, 50542, 50592",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C64.0-C64.9, C79.51-C79.52, D16.0-D16.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.01.96",
      "Brand Drug Name": "",
      "Full Policy": "Computer-Assisted Navigation for Orthopedic Procedure",
      "CPT": "0054T, 0055T, 20985",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.02",
      "Brand Drug Name": "",
      "Full Policy": "Allogeneic Pancreas Transplant",
      "CPT": "48550, 48551, 48552, 48554",
      "HCPCS": "S2065",
      "Comments for Procedure codes": "",
      "ICD10": "E10.10-E10.11, E10.21-E10.29, E10.641-E10.649, E10.69, E10.8, T86.890-T86.899, Z90.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.04",
      "Brand Drug Name": "",
      "Full Policy": "Isolated Small Bowel Transplant",
      "CPT": "44132, 44133, 44135, 44136, 44715, 44720, 44721",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "K90.0-K90.9, K91.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.05",
      "Brand Drug Name": "",
      "Full Policy": "Small Bowel/Liver and Multivisceral Transplant",
      "CPT": "44120, 44121, 44132, 44133, 44715, 44720, 44721, 44799, 47133, 47135, 47140, 47141, 47142, 47143, 47144, 47145, 47146, 47147, 47399",
      "HCPCS": "S2053, S2054",
      "Comments for Procedure codes": "",
      "ICD10": "K72.00-K72.01, K72.10-K72.11, K91.2",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.06",
      "Brand Drug Name": "",
      "Full Policy": "Liver Transplant and Combined Liver-Kidney Transplant",
      "CPT": "47133, 47135, 47140, 47141, 47142, 47143, 47144, 47145, 47146, 47147, 47399",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "B15.0-B15.9, B16.0-B16.9, B17.0-B17.9, B18.0-B18.9, B19.0-B19.9, B25.1, B66.1, B66.5, C22.0-C22.9, D64.0-D64.9, D81.810, D84.0-D84.9, E72.00-E72.09, E74.00-E74.9, E78.0-E78.9, E80.0-E80.7, E83.0-E83.09, E83.1-E83.19, E85.0-E85.9, E88.9, G60.0-G60.9, I74.8, I82.0, I99.9, K71.10-K71.9, K74.0-K74.69, K75.81, K77, K83.0-K83.9, Q44.6, S36.12xA-S36.13xS, T86.41, T86.42, Z52.6",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.07",
      "Brand Drug Name": "",
      "Full Policy": "Lung and Lobar Lung Transplant",
      "CPT": "32850, 32851, 32852, 32853, 32854, 32855, 32856",
      "HCPCS": "S2060, S2061",
      "Comments for Procedure codes": "",
      "ICD10": "A15.0, C96.6, D86.0, D86.2, E84.0-E84.9, E88.01, I26.01-I26.99, I27.0, I27.2, I27.82, I27.89, J42, J43.0-J43.9, J44.9, J47.0-J47.1, J60-J70.9, J84.1, M34.0-M34.9, P27.0-P27.9, Q33.0-Q33.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.08",
      "Brand Drug Name": "",
      "Full Policy": "Heart/Lung Transplant",
      "CPT": "33930, 33933, 33935",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "E84.0, E84.8-E84.9, I27.0, I27.1-I27.9, I50.1-I50.9, J43.0-J43.9, J44.0-J44.9, J84.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.09",
      "Brand Drug Name": "",
      "Full Policy": "Heart Transplant",
      "CPT": "33940, 33944, 33945",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "I25.110-I25.9, I47.0-I47.9, I49.01-I49.02, I50.1-I50.9, R57.0",
      "Comments for ICD10's": "Codes related to end-stage heart failure may be due to a wide variety of cardiac disorders. Some of the main code ranges are included below."
    },
    {
      "Policy #": "7.03.12",
      "Brand Drug Name": "",
      "Full Policy": "Islet Transplantation",
      "CPT": 48160,
      "HCPCS": "G0341, G0342, G0343, S2102",
      "Comments for Procedure codes": "",
      "ICD10": "K86.1",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "7.03.13",
      "Brand Drug Name": "",
      "Full Policy": "Composite Tissue Allotransplantation of the Hand and Face",
      "CPT": 26989,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "No specific codes--may be reported as shown",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.01",
      "Brand Drug Name": "",
      "Full Policy": "Adoptive Immunotherapy",
      "CPT": "36511, 37799, 38999, 96365, 0537T-0540T",
      "HCPCS": "J3398, Q2041, Q2042, S2107",
      "Comments for Procedure codes": "Q2141, Q2142 incorrect code",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.02",
      "Brand Drug Name": "",
      "Full Policy": "Chelation Therapy for Off-Label Uses",
      "CPT": "96365, 96366, 96374",
      "HCPCS": "J0600, J0895, M0300, J0470, J3520, S9355",
      "Comments for Procedure codes": "",
      "ICD10": "E08.00-E13.9, F84.0-F84.9, G30.0-G30.9, G35, I25.10-I25.9, M05.00-M06.09, M15.0-M19.93",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.08",
      "Brand Drug Name": "",
      "Full Policy": "Intraoperative Radiotherapy",
      "CPT": "77424, 77425, 77469",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C20, C49.4, C49.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.10",
      "Brand Drug Name": "",
      "Full Policy": "Charged-Particle (Proton or Helium Ion) Radiotherapy for Neoplastic Conditions",
      "CPT": "77399, 77299, 77520, 77522, 77523, 77525, 77499, 61796, 61797, 61798, 61799, 63620, 63621",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Remove 77402, 77407, 77412 (policy does not include regular radiotherapy)",
      "ICD10": "C41.0, C41.2, C41.9, C49.0, C69.30-C69.42, C71.0-C71.9, C72.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.11",
      "Brand Drug Name": "",
      "Full Policy": "Transcatheter Arterial Chemoembolization to Treat Primary or Metastatic Liver Malignancies",
      "CPT": "37243, 75894",
      "HCPCS": "Q0083",
      "Comments for Procedure codes": "",
      "ICD10": "C22.0-C22.9, C78.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.16",
      "Brand Drug Name": "",
      "Full Policy": "Chemical Peels",
      "CPT": "15788, 15789, 15792, 15793, 17360",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "D48.5, L57.0, L70.0, L70.1, L70.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.18",
      "Brand Drug Name": "",
      "Full Policy": "Lysis of Epidural Adhesions",
      "CPT": "62263, 62264, 64999",
      "HCPCS": "J7131",
      "Comments for Procedure codes": "",
      "ICD10": "G96.8, G96.9, G97.1, G98.8",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.40",
      "Brand Drug Name": "",
      "Full Policy": "Manipulation Under Anesthesia",
      "CPT": "22505, 21073, 23700, 27275, 27570, 27860, 00640",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M47.011-M47.9, M54.00-M54.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.43",
      "Brand Drug Name": "",
      "Full Policy": "Radioembolization for Primary and Metastatic Tumors of the Liver",
      "CPT": "37243, 75894, 77778, 79445, 77399",
      "HCPCS": "C2616, S2095",
      "Comments for Procedure codes": "",
      "ICD10": "C22.0, C78.7",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.46",
      "Brand Drug Name": "",
      "Full Policy": "Intensity-Modulated Radiotherapy of the Breast and Lung",
      "CPT": "77301, 77338, 77385, 77386,",
      "HCPCS": "G6015, G6016",
      "Comments for Procedure codes": "",
      "ICD10": "C34.00-C34.92, C50.011-C50.929",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.48",
      "Brand Drug Name": "",
      "Full Policy": "Intensity-Modulated Radiotherapy: Cancer of the Thyroid",
      "CPT": "77301, 77338, 77385, 77386,",
      "HCPCS": "G6015, G6016",
      "Comments for Procedure codes": "Please note: FEP Policy does not include Head and Neck cancer--corrected policy title",
      "ICD10": "C73",
      "Comments for ICD10's": "corrected dx to Thyroid only"
    },
    {
      "Policy #": "8.01.49",
      "Brand Drug Name": "",
      "Full Policy": "Intensity-Modulated Radiotherapy: Abdomen and Pelvis",
      "CPT": "77301, 77338, 77385, 77386,",
      "HCPCS": "G6015, G6016",
      "Comments for Procedure codes": "",
      "ICD10": "C16.0-C16.9, C17.0-C17.9, C18.0-C18.9, C19, C20, C21.0-C21.8, C22.0-C22.9, C23, C24.0-C24.9, C25.0-C25.9, C26.0-C26.9, C51.0-C51.9, C52, C53.0-C53.9, C54.0-C54.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.52",
      "Brand Drug Name": "",
      "Full Policy": "Orthopedic Applications of Stem-Cell Therapy",
      "CPT": "38206, 38230, 38232, 0263T, 0264T, 0265T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "M84.30-M84.9, M91.0–M94.9, S32.000A-S32.9xxS, S42.001A-S42.92xS, S52.001A-S52.92xS, S62.001A-S62.92xS, S72.001A-S72.92xS, S82.001A-S82.92xS, S92.001A-S92.919S",
      "Comments for ICD10's": "Numerous diagnoses are relevant to this policy, the following are provided as examples."
    },
    {
      "Policy #": "8.01.55",
      "Brand Drug Name": "",
      "Full Policy": "Stem-Cell Theraphy for Peripheral Arterial Disease",
      "CPT": "0263T, 0264T, 0265T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.57",
      "Brand Drug Name": "",
      "Full Policy": "Baroreflex Stimulation Devices",
      "CPT": "0266T, 0267T, 0268T, 0269T, 0270T, 0271T, 0272T, 0273T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.59",
      "Brand Drug Name": "",
      "Full Policy": "Intensity-Modulated Radiotherapy: Central Nervous System Tumors",
      "CPT": "77301, 77338, 77385, 77386,",
      "HCPCS": "G6015, G6016",
      "Comments for Procedure codes": "",
      "ICD10": "C71.0-C71.9, C72.0-C72.9, C79.31-C79.32, C79.40-C79.49",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.01.61",
      "Brand Drug Name": "",
      "Full Policy": "Focal Treatments for Prostate Cancer",
      "CPT": 55899,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "C61",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.02.04",
      "Brand Drug Name": "",
      "Full Policy": "Lipid Apheresis",
      "CPT": "36516, 0342T",
      "HCPCS": "S2120",
      "Comments for Procedure codes": "",
      "ICD10": "E78.0",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.03.01",
      "Brand Drug Name": "",
      "Full Policy": "Functional Neuromuscular Electrical Stimulation",
      "CPT": "97116, 97530, 97760, 97763",
      "HCPCS": "E0764, E0770",
      "Comments for Procedure codes": "",
      "ICD10": "G35, G81.00-G81.94, G82.20-G82.54, G83.0-G83.9, I63.00- I63.9, I69.30-I69.398, M21.371-M21.379",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.03.09",
      "Brand Drug Name": "",
      "Full Policy": "Vertebral Axial Decompression",
      "CPT": 97012,
      "HCPCS": "S9090",
      "Comments for Procedure codes": "",
      "ICD10": "M51.04-M51.07, M51.14-M51.17, M51.24-M51.27, M51.34-M51.37, M54.5",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.03.10",
      "Brand Drug Name": "",
      "Full Policy": "Cognitive Rehabilitation",
      "CPT": 97127,
      "HCPCS": "G0515",
      "Comments for Procedure codes": "",
      "ICD10": "S06.0-S06.9x9-",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "8.03.13",
      "Brand Drug Name": "",
      "Full Policy": "Sensory Integration Therapy and Auditory Integration Therapy",
      "CPT": 97533,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "F84.0-F84.9",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.06",
      "Brand Drug Name": "",
      "Full Policy": "Ophthalmologic Techniques That Evaluate the Posterior Segment for Glaucoma",
      "CPT": "92133, 0198T, 0329T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "New code eff 01/01/2019",
      "ICD10": "H40.141- H40.149, H40.30-H40.33, H40.40-H40.43, H40.89, H40.9, H42, Z01.00-Z01.01",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.15",
      "Brand Drug Name": "",
      "Full Policy": "Retinal Prosthesis",
      "CPT": "0100T, 0472T, 0473T",
      "HCPCS": "C1841, C1842, L8608, V2799",
      "Comments for Procedure codes": "",
      "ICD10": "H35.31, H35.50, H35.52",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.18",
      "Brand Drug Name": "",
      "Full Policy": "Optical Coherence Tomography  of the Anterior Eye Segment",
      "CPT": 92132,
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "",
      "ICD10": "H40.20-H40.249",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.20",
      "Brand Drug Name": "",
      "Full Policy": "Intraocular Radiation Therapy for Age-Related Macular Degeneration",
      "CPT": "67036, 67299",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "0190T (deleted eff 12/31/2018)",
      "ICD10": "H35.30, H35.31, H35.32",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.21",
      "Brand Drug Name": "",
      "Full Policy": "Aqueous Shunts and Stents for Glaucoma",
      "CPT": "0191T, 0253T, 0376T, 0449T, 0450T, 0474T, 66183",
      "HCPCS": "C1783, L8612",
      "Comments for Procedure codes": "",
      "ICD10": "H25.011-H26.9, H40.10x0-H42",
      "Comments for ICD10's": ""
    },
    {
      "Policy #": "9.03.29",
      "Brand Drug Name": "",
      "Full Policy": "Eyelid Thermal Pulsation for the Treatment of Dry Eye Syndrome",
      "CPT": "0207T, 0330T, 0507T",
      "HCPCS": "No HCPCS",
      "Comments for Procedure codes": "Coded added; eff 07/01/18",
      "ICD10": "H04.121-H04.129; Policy applies to All Diagnoses",
      "Comments for ICD10's": ""
    }
  ]

export default fullPolicies;