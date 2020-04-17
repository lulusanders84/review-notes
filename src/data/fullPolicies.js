const fullPolicies = [
  {
     "Policy #": "1.01.05",
     "Full Policy": "Ultrasound Accelerated Fracture Healing Device",
     "CPT": 20979,
     "HCPCS": "E0760",
     "ICD10 Diagnosis codes": "S42.00xA-S42.92xA, S49.00xA-S49.199A, S52.00xA-S52.92xA, S59.00xA-S59.299A, S62.00xA-S62.92xA, S72.00xA-S72.92xA, S79.00xA-S79.199A, S82.00xA-S82.92xA, S89.00xA-S89.399A, S92.00xA-S92.919A, M80.M84"
  },
  {
     "Policy #": "1.01.09",
     "Full Policy": "Transcutaneous Electrical Nerve Stimulation",
     "CPT": "No CPT",
     "HCPCS": "A4595, A4630, E0720, E0730, E0731",
     "ICD10 Diagnosis codes": "G89.11, G89.12, G89.18, G89.21, G89.22, G89.28, G89.29, G89.3, G89.4, M25.50-M25.579, M54.10-M54.18, M54.2, M54.30-M54.32, M54.40-M54.42, M54.5, M54.6, M54.81, M54.89, M54.9, M79.1, M79.2, R52"
  },
  {
     "Policy #": "1.01.15",
     "Full Policy": "Oscillatory Devices for the Treatment of Cystic Fibrosis and Other Respiratory Conditions",
     "CPT": "No CPT",
     "HCPCS": "A7025, A7026, E0481, E0483, E0484, S8185",
     "ICD10 Diagnosis codes": "E84.0, E84.11, E84.19, E84.8, E84.9, J47.1, J47.9"
  },
  {
     "Policy #": "1.01.17",
     "Full Policy": "Pelvic Floor Stimulation as a Treatment of Urinary and Fecal Incontinence",
     "CPT": "97014, 97032",
     "HCPCS": "E0740, G0283",
     "ICD10 Diagnosis codes": "F98.0, F98.1, N39.3, N39.41-N39.46, N39.490, N39.498"
  },
  {
     "Policy #": "1.01.18",
     "Full Policy": "Pneumatic Compression Pumps for Treatment of Lymphedema and Venous Ulcers",
     "CPT": "No CPT",
     "HCPCS": "E0650, E0655, E0660, E0665, E0666, E0651, E0656, E0657, E0667, E0668, E0669, E0670, E0652, E0671, E0672, E0673, E0676 ",
     "ICD10 Diagnosis codes": "I89.0, I97.2, Q82.0"
  },
  {
     "Policy #": "1.01.23",
     "Full Policy": "Transtympanic Micropressure Applications as a Treatment of Meniere Disease",
     "CPT": "No CPT",
     "HCPCS": "E2120, A4638",
     "Comments for Procedure codes": "Archive 07/01/2020",
     "ICD10 Diagnosis codes": "H81.01-H81.09"
  },
  {
     "Policy #": "1.01.24",
     "Full Policy": "Interferential Current Stimulation",
     "CPT": "64550, 97014, 97032",
     "HCPCS": "G0283, S8130, S8131",
     "ICD10 Diagnosis codes": "G56.40-G56.42, G57.70-G57.72, G89.0-G89.4, G90.50-G90.59, M25.50-M25.579, M54.00-M54.9, M79.60-M79.676, R52"
  },
  {
     "Policy #": "1.01.26",
     "Full Policy": "Cooling Devices Used in the Outpatient Setting",
     "CPT": "No CPT",
     "HCPCS": "E0218, E0236"
  },
  {
     "Policy #": "1.01.27",
     "Full Policy": "Electrical Stimulation for the Treatment of Arthritis",
     "CPT": "No CPT",
     "HCPCS": "E0762",
     "ICD10 Diagnosis codes": "M05.00-M05.9, M06.00-M06.9, M08.00-M08.99, M15.0-M19.93"
  },
  {
     "Policy #": "1.01.28",
     "Full Policy": "Postsurgical Home Use of Limb Compression Devices for Venous Thromboembolism Prophylaxis",
     "CPT": "No CPT",
     "HCPCS": "E0650, E0651, E0652, E0655, E0656, E0657, E0660, E0665, E0666, E0667, E0668, E0669, E0670, E0671, E0672, E0673, E0676",
     "ICD10 Diagnosis codes": "M05.051-M05.059; M05.061-M05.69;M05.151-M05.159; M05.161-M05.169; M05.251-M05.259; M05.261-M05.269; M05.351-M05.359; M05.361-M05.369; M05.451-M05.459; M05.561-M05.469; M05.551-M05.559; M05.561-M05.659; M05.651-M05.659; M05.661-M05.669; M05.751-M05.759; M05.761-M05.769; M05.851-M05.859; M05.861-M05.869; M06.051-M06.059; M06.061-M06.069",
     "Comments for ICD10's": "Continued on next row"
  },
  {
     "Policy #": "1.01.28",
     "Full Policy": "Postsurgical Home Use of Limb Compression Devices for Venous Thromboembolism Prophylaxis",
     "CPT": "No CPT",
     "ICD10 Diagnosis codes": "M06.851-M06.859; M06.861-M06.869; M08.051-M08.059; M08.061-M08.069; M08.251-M08.259; M08.261-M08.269; M08.451-M08.459; M08.461-M08.469; M08.851-M08.859; M08.861-M08.869; M08.951-M08.959; M08.961-M08.969; M12.551-M12.559; M12.561-M12.569; M15.0-M15.9; M16.0-M16.9; M17.0-M17.9; M80.051-M80.059; M80.851-M80.859; M84.451-M84.453; M84.459;  M84.650-M84.653; M84.659; S72.001A-S72.399S",
     "Comments for ICD10's": "Other codes shown above"
  },
  {
     "Policy #": "1.01.29",
     "Full Policy": "Tumor Treating Fields Therapy for Glioblastoma",
     "CPT": "No CPT",
     "HCPCS": "E0766, A4555",
     "ICD10 Diagnosis codes": "C71.0-C71.9"
  },
  {
     "Policy #": "1.01.30",
     "Full Policy": "Artificial Pancreas Device Systems",
     "CPT": "No CPT",
     "HCPCS": "A4226, E0787, S1034, S1035, S1036, S1037",
     "ICD10 Diagnosis codes": "E10.10-E13.9"
  },
  {
     "Policy #": "1.03.04",
     "Full Policy": "Powered Exoskeleton for Ambulation in Patients With Lower-Limb Disabilities",
     "CPT": "No CPT",
     "HCPCS": "E1399",
     "ICD10 Diagnosis codes": "G12.21, G35, G61.0"
  },
  {
     "Policy #": "1.03.05",
     "Full Policy": "Patient-Controlled End of Range Motion Stretching Devices",
     "CPT": "No CPT",
     "HCPCS": "E1811, E1816, E1818, E1831, E1841",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "1.04.04",
     "Full Policy": "Myoelectric Prosthetic and Orthotic Components for the Upper Limb",
     "CPT": "No CPT",
     "HCPCS": "L6026, L6880, L6925, L6935, L6945, L6955, L6965, L6975, L7007, L7008, L7009, L7045, L7190, L7191, L8701, L8702",
     "ICD10 Diagnosis codes": "Z44.001-Z44.009, Z44.011-Z44.019, Z44.021-Z44.029"
  },
  {
     "Policy #": "1.04.05",
     "Full Policy": "Microprocessor-Controlled Prostheses for the Lower Limb",
     "CPT": "No CPT",
     "HCPCS": "L2006, L5856, L5857, L5858, L5973",
     "Comments for Procedure codes": "Removing L2006 until policy can be reviewed.",
     "ICD10 Diagnosis codes": "S78.011-S78.929, Z96.651-Z96.659"
  },
  {
     "Policy #": "2.01.04",
     "Full Policy": "Hyperbaric Oxygen Therapy",
     "CPT": "99183, G0277",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "A48.0, D62, E086.21, E086.22, E096.21, E096.22, E10.621, E106.22, E11.621, E11.622,  E13.621, E136.22, K52.0, M27.2, M46.20-M86.28, M86.40-M86.69, T58.01xA-T58.94xD, T79.0xxA-T79.0xxD, T79.6xxA-T79.6xxD",
     "Comments for ICD10's": " (Note: Use additional code to identify site of ulcer L97.4-, L97.5-); (Note: sequelae due to exposure to ionizing radiation would also be reported, when applicable, using code W88.0xxS, W88.1xxS or W88.8xxS depending on the radiation source); (Note: 7th character “S” for sequelae is defined as after the acute stage has ended so codes ending in S would not be applicable to acute poisoning)"
  },
  {
     "Policy #": "2.01.18",
     "Full Policy": "Diagnosis and Medical Management of Obstructive Sleep Apnea Syndrome",
     "CPT": "94660, 94762, 95800, 95801, 95806, 95807, 98808, 95810, 95811, 95782, 95783",
     "HCPCS": "A7027, A7028, A7029, A7034, A7035, A7036, A7037, A7038, A7039, E0470, E0471, E0485, E0486, E0561, E0562, E0601, G0398, G0399, G0400",
     "ICD10 Diagnosis codes": "G47.33, R06.81, R40.0, G47.30, G47.8, G47.9"
  },
  {
     "Policy #": "2.01.21",
     "Full Policy": "Temporomandibular Joint Disorder",
     "CPT": "20605, 20606, 21010, 21116, 21050, 21060, 21073, 21240, 21242, 21243, 29800, 29804, 70328, 70330, 70332, 70336, 70350, 70355, 97010, 97024, 97026",
     "HCPCS": "A9515, J7318, J7321, J7322, J7323, J7324, J7325, J7326, J7327, J7328, J7329, J7331, J7332, E1700, E1701, E1702 ",
     "Comments for Procedure codes": "was shown as J7129 in error and J7318 was missing",
     "ICD10 Diagnosis codes": "M26.00-M26.09, M26.10-M26.19, M26.50-M26.59, M26.601-M26.69, S03.0xxA-S03.0xxS, S03.4xxA-S03.4xxS"
  },
  {
     "Policy #": "2.01.26",
     "Full Policy": "Prolotherapy ",
     "CPT": "M0076",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.01.39",
     "Full Policy": "Quantitative Sensory Testing",
     "CPT": "0106T, 0107T, 0108T, 0109T, 0110T",
     "HCPCS": "G0255",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.01.40",
     "Full Policy": "Extracorporeal Shock Wave Treatment for Plantar Fasciitis and Other Musculoskeletal Conditions",
     "CPT": "0101T, 0102T, 28890",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M72.2, M75.20-M75.22, M75.30-M75.32, M77.00-M77.02, M77.10-M77.12, M84.311-M843.8, M87.051-M87.059, S322xxK-S32.9xxK, S42.00xK-S42.92xK, S49.00xK-S49.199K, S52.00xK-S52.92xN",
     "Comments for ICD10's": "Fracture nonunion codes for the appendicular skeleton – 7th digit“K” is subsequent encounter for nonunion (in forearm, femur, lower leg & ankle fractures 7th digits “M” and “N” are also nonunion for certain types of open fractures – in fractures of the shoulder,"
  },
  {
     "Policy #": "2.01.50",
     "Full Policy": "Transcranial Magnetic Stimulation as a Treatment of Depression and Other Psychiatric/Neurological Disorders",
     "CPT": "90867, 90868, 90869",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F32.0-F32.9, F33.0-F33.9"
  },
  {
     "Policy #": "2.01.54",
     "Full Policy": "Endovascular Procedures for Intracranial Arterial Disease (Atherosclerosis and Aneurysms)",
     "CPT": "36221, 36223, 36224, 36227, 36228, 61624, 61630, 61635, 61645",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I63.00-I63.9, I66.01-I66.9, I67.0-I67.9"
  },
  {
     "Policy #": "2.01.56",
     "Full Policy": "Low-Level Laser Therapy",
     "CPT": "0552T",
     "HCPCS": "S8948",
     "ICD10 Diagnosis codes": "G56.0-G56.02, L98.411-L98.499, M05.00-M05.9, M06.00-M06.9, M17.0,-M17.9, M25.521-M25.529, M26.60-M26.69, M54.5, M75.40-M75.42, M76.60-M76.72, M79.7"
  },
  {
     "Policy #": "2.01.58",
     "Full Policy": "Transanal Radiofrequency Treatment of Fecal Incontinence",
     "CPT": 46999,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "R15.0-R15.9"
  },
  {
     "Policy #": "2.01.68",
     "Full Policy": "Laboratory Tests for Heart & Kidney Transplant Rejection",
     "CPT": "0085T, 81595, 93505, 0055U, 0087U, 0088U, 0118U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "T86.20-T86.298, Z48.21, Z94.1"
  },
  {
     "Policy #": "2.01.73",
     "Full Policy": "Actigraphy",
     "CPT": 95803,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F51.01-F51.9, G25.81, G47.00-G47.9"
  },
  {
     "Policy #": "2.01.77",
     "Full Policy": "Automated Point-of-Care Nerve ConductionTests ",
     "CPT": "95905, 95999",
     "HCPCS": "G0255",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.01.81",
     "Full Policy": "Ingestible pH and Pressure Capsule",
     "CPT": 91112,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E08.43, E09.43, E10.43, E11.43, E13.43, K30, K31.84, K31.9, K59.00-K59.09"
  },
  {
     "Policy #": "2.01.84",
     "Full Policy": "Chromoendoscopy as an Adjunct to Colonoscopy",
     "CPT": 44799,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.01.87",
     "Full Policy": "Confocal Laser Endomicroscopy",
     "CPT": "43206, 43252, 88375, 0397T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K22.70-K22.719, Z13.810, Z13.811, Z13.83"
  },
  {
     "Policy #": "2.01.89",
     "Full Policy": "Laser Treatment of Onychomycosis",
     "CPT": "17999, 96999",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "B35.1"
  },
  {
     "Policy #": "2.01.90",
     "Full Policy": "Navigated Transcranial Magnetic Stimulation",
     "CPT": 64999,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.01.91",
     "Full Policy": "Peroral Endoscopic Myotomy for Treatment of Esophageal Achalasia",
     "CPT": 43499,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E88.81, K22, K50-K52, K59.00-K59.09, K91.850"
  },
  {
     "Policy #": "2.01.96",
     "Full Policy": "Autonomic Nervous System Testing",
     "CPT": "95921, 95922, 95923, 95924, 95943",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "Policy Archived 04/01/2020",
     "ICD10 Diagnosis codes": "E10.40-E10.49, E85.1;E85.8, G61.0-G61.9, G90.01-G90.9, M32.0-M32.9, M35.00-M35.09, R55",
     "Comments for ICD10's": "Any of a large number of diagnosis codes might apply to this policy, the following is not a complete list"
  },
  {
     "Policy #": "2.01.99",
     "Full Policy": "Polysomography for Non-Respiratory Sleep Disorders",
     "CPT": "95805, 95808, 95810, 95811, 95782, 95783",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G47.411, G47.419, G47.50-G47.59, G47.61"
  },
  {
     "Policy #": "2.01.101",
     "Full Policy": "Dry Needling and Trigger Point Injections for Myofascial pain",
     "CPT": "20560, 20561",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Investigational for all myofascial pain"
  },
  {
     "Policy #": "2.02.08",
     "Full Policy": "Ambulatory Event Monitors and Mobile Cardiac Outpatient Telemetry",
     "CPT": "33285, 33286, 93228, 93229, 93268, 93270, 93271, 93272, 93299, 0295T, 0296T, 0297T, 0298T, 0497T, 0498T, G2066",
     "HCPCS": "E0616, C1764",
     "Comments for Procedure codes": "eff 01/01/2020",
     "ICD10 Diagnosis codes": "I44.0-I44.7, I45.0-I45.9, I47.0-I47.9, I48.0-I48.92, I49.01-I49.9, I63.9, R00.2, R42, R55"
  },
  {
     "Policy #": "2.02.10",
     "Full Policy": "Biventricular Pacemakers (Cardiac Resynchronization Therapy) for Treamtent of Heart Failure ",
     "CPT": "33202, 33203, 33207, 33217, 33220, 33222, 33223, 33226, 33228, 33228, 33229, 33230, 33231, 33230, 33231, 33232, 33233, 33238, 33241, 33243, 33243, 33244, 33249, 33263, 33264 0515T-0522T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I50.20-I50.9"
  },
  {
     "Policy #": "2.02.15",
     "Full Policy": "Wearable Cardioverter-Defibrillators",
     "CPT": "93292, 93745",
     "HCPCS": "K0606, K0607, K0608, K0609",
     "ICD10 Diagnosis codes": "I42.0-I43, I47.0-I47.9, I49.01-I49.02, I50.1-I50.9, Z86.74"
  },
  {
     "Policy #": "2.02.18",
     "Full Policy": "Progenitor Cell Therapy for Treatment of Damaged Myocardium Due to Ischemia ",
     "CPT": "38206, 38232, 38230, 38240, 38241",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.02.30",
     "Full Policy": "Transcatheter Mitral Valve Repair",
     "CPT": "0345T, 0544T, 33418, 33419",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.02.31",
     "Full Policy": "Myocardial Strain Imaging",
     "CPT": 93356,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.02.32",
     "Full Policy": "Leadless Cardiac Pacemakers",
     "CPT": "33274, 33275",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G90.01, I44.1-I44.2, I45.2, I45.3, I45.5, I47.2, R00.1, I48.0-I48.92, I49.3, I49.5"
  },
  {
     "Policy #": "2.03.01",
     "Full Policy": "In Vitro Chemoresistance and Chemosensitivity Assays ",
     "CPT": "81535, 81536, 88358, 88305, 88104, 87230, 88313, 89050, 0564T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C00.0-C96.9"
  },
  {
     "Policy #": "2.04.07",
     "Full Policy": "Urinary Biomarkers for Cancer Screening, Diagnosis, and Surveillance",
     "CPT": "81479, 86294, 86316, 86386, 88120, 88121, 0012M, 0013M, 0002U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C67.0-C67.9, D09.0, D49.4, D49.4, R31.9, Z83.71, Z85.51, Z86.010"
  },
  {
     "Policy #": "2.04.08  ",
     "Full Policy": "Genetic Testing for Lynch Syndrome and Other Inherited Colon Cancer Syndromes",
     "CPT": "81201, 81202, 81203, 81210, 81288, 81292, 81293, 81294, 81295, 81296, 82197, 81298, 81299, 81300, 81301, 81317, 81318, 81319, 81403, 81435, 81436, 0101U, 0130U ",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z85.030-Z85.038, Z85.040-Z85.048, Z80.0, Z31.5, C18.0-C18.9, C19, C20, D12.0-D12.9, D01.0-D01.9, Q85.8"
  },
  {
     "Policy #": "2.04.10",
     "Full Policy": "Identification of Microorganisms Using Nucleic Acid Probes",
     "CPT": "87480, 87481, 87482, 0068U, 0086U, 0096U, 0097U, 0098U, 0099U, 0100U, 0112U, 0115U, 0140U- 0142U, 0151U, 87483, 87485, 87486, 87487, 87490, 87491, 87492, 87493, 87495, 87496, 87497, 87498, 87500, 87501, 87502, 87503, 87505, 87506, 87507, 87510, 87511, 87512, 87516, 87517, 87520, 87521, 87522, 87525, 87526, 87527, 87528, 87529, 87530, 87531, 87532, 87533, 87534, 87535, 87536, 87537, 87538, 87539, 87540, 87541, 87542, 87550, 87551, 87552, 87555, 87556, 87557, 87560, 87561, 87562, 87563,87580, 87581, 87582, 87590, 87591, 87592, 87623, 87624, 87625, 87631, 87632, 87633, 87634, 87640, 87641, 87650, 87651, 87652, 87653, 87660, 87661, \n",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "A04.71-A04.72, A15.0-A19.9,  A31.0-A31.9, A48.1-A48.2, A54.00-A54.09, A59.00-A59.09, A74.0-A74.89, A74.9, B00.0-B00.9, B16.0-B16.9, B17.10-B17.11, B18.0-B18.1, B18.2, B19.10-B19.11-B19.20-B19.21, B20, B25.0-B25.9, B97.7, J09.X1-J11.89 , P35.0-P35.9, Z21, Z36"
  },
  {
     "Policy #": "2.04.14",
     "Full Policy": "Cerebrospinal Fluid and Urinary Biomarkers of Alzheimer Disease",
     "CPT": "81099, 83520, 86849",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F03.90-F03.91, G30.0-G30.9, G31.1, R41.0, R41.81, Z13.858"
  },
  {
     "Policy #": "2.04.19",
     "Full Policy": "Pharmacogenomic and Metabolite Markers for Patients Treated with Thiopurines",
     "CPT": "81335, 0034U, 0169U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "New code eff 07/01/2020",
     "ICD10 Diagnosis codes": "K50.00-K50.019, K51.00-K51.319"
  },
  {
     "Policy #": "2.04.26",
     "Full Policy": "Fecal Analysis in the Diagnosis of Intestinal Dysbiosis",
     "CPT": "82239, 82271, 82272, 82274, 82542, 82656, 82710, 82715, 82725, 83520, 83630, 83986, 83993, 84311, 87045, 87046, 87075, 87102, 87177, 87209, 87328, 87329, 87336, 89160",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "Policy re-instated eff 04/01/2020",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.29",
     "Full Policy": "Analysis of Human DNA in Stool Samples as a Technique for Colorectal Cancer Screening",
     "CPT": 81528,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C18.0-C18.9, C19, Z12.10-Z12.13, Z15.09, Z80.00"
  },
  {
     "Policy #": "2.04.33",
     "Full Policy": "Genetic and Protein Biomarkers for the Diagnosis and Cancer Risk Assessment of Prostate Cancer",
     "CPT": "81313, 81539, 81542, 81551, 84153, 84154, 86316, 0005U, 0021U, 0047U, 0113U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C61, Z12.5"
  },
  {
     "Policy #": "2.04.36",
     "Full Policy": "Assays of Genetic Expression in Tumor Tissue as a Technique to Determine Prognosis in Patients with Breast Cancer ",
     "CPT": "81518, 81519, 81520, 81521, 81522, 0045U",
     "HCPCS": "S3854",
     "ICD10 Diagnosis codes": "C50.011-C50.929, D05.00-D05.92, Z17.0"
  },
  {
     "Policy #": "2.04.38",
     "Full Policy": "Cytochrome P450 Genotype Guided Treatment Strategy ",
     "CPT": "81225, 81226, 81227, 81230, 81231, 81402, 81404, 81405, 0029U, 0031U, 0070U-0076U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I20.0, I21.01-I22.9, I24.1, I25.110, I63.50-I63.549, I66.01-I66.9, I73"
  },
  {
     "Policy #": "2.04.43",
     "Full Policy": "Genetic Testing for Cardiac Ion Channelopathies",
     "CPT": "81403, 81405, 81406, 81407, 81408, 81413, 81414",
     "HCPCS": "S3861",
     "ICD10 Diagnosis codes": "I45.81, Z13.6, Z13.79"
  },
  {
     "Policy #": "2.04.44",
     "Full Policy": "Genetic Testing for Familial Cutaneous Malignant Melanoma",
     "CPT": "81404, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z12.83, Z80.8"
  },
  {
     "Policy #": "2.04.45",
     "Full Policy": "Molecular Analysis for Targeted Therapy of Non-Small-Cell Lung Cancer",
     "CPT": "81210, 81235, 81275, 81276, 81404, 81405, 81479, 88341, 88342, 88364, 88365, 88366, 0022U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C34.0-C34.92",
     "Comments for ICD10's": "No specific diagnosis for Non-Small Cell Lung Cancer"
  },
  {
     "Policy #": "2.04.48",
     "Full Policy": "Genotype-Guided Warfarin Dosing",
     "CPT": "81227, 81355, 0030U",
     "HCPCS": "G9143",
     "ICD10 Diagnosis codes": "I48.0, Z86.71, Z86.72"
  },
  {
     "Policy #": "2.04.51",
     "Full Policy": "Genotype-Guided Tamoxifen Treatment",
     "CPT": "81226, 0070U, 0071U, 0072U, 0073U, 0074U,  0075U, 0076U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C50.011-C50.929, C79.81, D05.01-D05.99, D07.30-D07.39, Z13.71-Z13.79, Z85.3, Z80.3"
  },
  {
     "Policy #": "2.04.52",
     "Full Policy": "Molecular Testing for the Management of Pancreatic Cysts, Barrett Esophagus, and Solid Pancreatic Lesions",
     "CPT": "84999, 89240",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.53",
     "Full Policy": "KRAS, NRAS, and BRAF Variant Analysis in Metastatic Colorectal Cancer",
     "CPT": "81210, 81275, 81276, 81311, 88363, 0069U, 0111U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C18.0-C18.9, C19, C20,C78.5"
  },
  {
     "Policy #": "2.04.54",
     "Full Policy": "Gene Expression‒Based Assays for Cancers of Unknown Primary",
     "CPT": "81504, 81540, 81479, 81599",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C79.9, C80.0, C80.1"
  },
  {
     "Policy #": "2.04.56",
     "Full Policy": "Immune Cell Function Assay",
     "CPT": 86352,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G56.0-G56.02 , L98.411-L98.499, M05.00-M05.9, , M06.00-M06.9, M17.0-M17.9, M25.521-M25.529, M26.60-M26.69, M54.5, M75.40-M75.42, M76.60-M76.72, M79.7"
  },
  {
     "Policy #": "2.04.59",
     "Full Policy": "Genetic Testing for Developmental Delay/Intellectual Disability, Autism Spectrum Disorder, and Congenital Anomalies",
     "CPT": "81228, 81229, 81470, 81471, 81479, 0156U, 0170U",
     "HCPCS": "S3870",
     "Comments for Procedure codes": "New code eff 07/01/2020",
     "ICD10 Diagnosis codes": "F84.0-F84.9, F80.0-F80.9, F81.0-F81.9, F82, F88, F89, H93.25, R48.0, F70-F79 "
  },
  {
     "Policy #": "2.04.60",
     "Full Policy": "JAK2, MPL, and CALR Testing for Myeloproliferative Neoplasms",
     "CPT": "81219, 81270, 81402, 81403, 0017U, 0027U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C96.2, C92.10-C92.12, D45, D47.3, D47.4 "
  },
  {
     "Policy #": "2.04.61",
     "Full Policy": "Multigene Expression Assay for Predicting Recurrence in Colon Cancer",
     "CPT": "81525, 81599, 84999, 88299",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C18.0-C18.9, C19, Z85.030, Z85.038"
  },
  {
     "Policy #": "2.04.62",
     "Full Policy": "Multimarker Serum Testing Related to Ovarian Cancer",
     "CPT": "81500, 81503, 0003U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D49.59, D27.0-D27.9, D39.10-D39.12"
  },
  {
     "Policy #": "2.04.68",
     "Full Policy": "Laboratory and Genetic Testing for Use of 5-Fluorouracil in Patients with Cancer",
     "CPT": "81232, 81346",
     "HCPCS": "S3722",
     "ICD10 Diagnosis codes": "C18.0-C18.9, C19 "
  },
  {
     "Policy #": "2.04.69",
     "Full Policy": "Fecal Calprotectin Testing",
     "CPT": 83993,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K50.00-K50.919, K51.00-K51.019, K51.50-K51.919, K52.3, R19.8"
  },
  {
     "Policy #": "2.04.70",
     "Full Policy": "Genetic Testing for Lipoprotein(a) Variant(s) as a Decision Aid for Aspirin Treatment ",
     "CPT": 81479,
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.72",
     "Full Policy": "Gene Expression Testing in the Evaluation of Patients With Stable Ischemic Heart Disease",
     "CPT": "81493, 81599",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z15.89, Z13.6"
  },
  {
     "Policy #": "2.04.74",
     "Full Policy": "DNA-Based Testing for Adolescent Idiopathic Scoliosis ",
     "CPT": "0004M",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "See CPT Appendix \"O\"",
     "ICD10 Diagnosis codes": "M41.122-M41.129"
  },
  {
     "Policy #": "2.04.75",
     "Full Policy": "Genetic Testing of CADASIL Syndrome",
     "CPT": 81406,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.76",
     "Full Policy": "Quantitative Assay for Measurement of HER2 Total Protein Expression and HER2 Dimers",
     "CPT": "81479, 84999",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.77",
     "Full Policy": "BRAF Gene Variant Testing to Select Melanoma or Glioma Patients for Targeted Therapy",
     "CPT": 81210,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C43.0-C43.9, C71.9"
  },
  {
     "Policy #": "2.04.78",
     "Full Policy": "Molecular Markers in Fine Needle Aspirates of the Thyroid",
     "CPT": "81345, 81445, 81545, 0018U, 0026U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C73, D44.0 "
  },
  {
     "Policy #": "2.04.79",
     "Full Policy": "Genetic Testing for Alpha-1 Antitrypsin Deficiency ",
     "CPT": 81332,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E88.01"
  },
  {
     "Policy #": "2.04.80",
     "Full Policy": "Genetic Testing for Hereditary Hemochromatosis ",
     "CPT": 81256,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E83.10, E83.110-E83.119, Z83.49 "
  },
  {
     "Policy #": "2.04.81",
     "Full Policy": "Genetic Testing for Rett Syndrome",
     "CPT": "81302, 81303, 81304, 81404, 81405, 81406, 81470, 81471",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F84.2, Z13.4"
  },
  {
     "Policy #": "2.04.82",
     "Full Policy": "Genetic Testing for Inherited Thrombophilia",
     "CPT": "81240, 81241, 81291, 81400, 81404, 81405, 81406, 81470, 81471",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D68.51, D68.52, D68.59, D68.61-D68.69 "
  },
  {
     "Policy #": "2.04.83",
     "Full Policy": "Genetic Testing for FMR1 Variants (Including Fragile X Syndrome)",
     "CPT": "81243, 81244",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F70-F79, F80.0-F80.9, F82, F84.0-F84.9, Z31.430, Z31.440, Z81.0"
  },
  {
     "Policy #": "2.04.84",
     "Full Policy": "Measurement of Serum Antibodies to Selected Biologic Agents",
     "CPT": "80145, 80230, 80280, 84999",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "Policy Title changed eff 04/01/2020",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.85",
     "Full Policy": "BCR-ABL1 Testing in Chronic Myelogenous Leukemia and Acute Lymphoblastic Leukemia",
     "CPT": "81170, 81206, 81207, 81208, 81401, 0040U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C91.00-C91.02, C92.10-C92.12, C92.20-C92.22 "
  },
  {
     "Policy #": "2.04.86",
     "Full Policy": "Genetic Testing for Duchenne and Becker Muscular Dystrophy",
     "CPT": "81161, 81408",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G71.01, R62.59, Z31.430 "
  },
  {
     "Policy #": "2.04.87",
     "Full Policy": "Genetic Testing for Hereditary Hearing Loss",
     "CPT": "81252, 81253, 81254, 81430, 81431",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H90.0-H90.8, H91.8X1-H91.8X9, Z14.8, Z15.89, Z31.430, Z31.440, Z82.2"
  },
  {
     "Policy #": "2.04.88",
     "Full Policy": "Genetic Testing for PTEN Hamartoma Tumor Syndrome",
     "CPT": "81321, 81322, 81323, 0101U, 0102U, 0130U, 0131U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Q85.8, Q85.9, Z13.71, Z13.79 "
  },
  {
     "Policy #": "2.04.89",
     "Full Policy": "Genetic Testing for the Diagnosis of Inherited Peripheral Neuropathies",
     "CPT": "81324, 81325, 81326, 81403, 81404, 81405, 81406, 81448, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G60.0, G60.8, G60.9, Z31.430, Z31.440"
  },
  {
     "Policy #": "2.04.94",
     "Full Policy": "Genetic Testing for Lactase Insufficiency",
     "CPT": 81400,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.96",
     "Full Policy": "Genetic Testing for Statin-Induced Myopathy",
     "CPT": 81328,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G71.14, T46.6X5 A,D, S"
  },
  {
     "Policy #": "2.04.97",
     "Full Policy": "Microarray-Based Gene Expression Profile Testing for Multiple Myeloma Risk Stratification",
     "CPT": "81479, 81599, 86849",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C90.00-C90.02"
  },
  {
     "Policy #": "2.04.98",
     "Full Policy": "Drug Testing in pain Management and Substance Use Disorder Treatment",
     "CPT": "80305, 80306, 80307, 80320-80377, 0007U, 0011U, 0051U, 0054U, 0079U, 0082U, 0093U, 0116U, 0117U, 0143U, 0144U, 0145U, 0146U, 0147U, 0148U, 0149U, 0150U ",
     "HCPCS": "G0480, G0481, G0482, G0483, G0659",
     "Comments for Procedure codes": "New codes eff 01/01/2020",
     "ICD10 Diagnosis codes": "F11.10-F11.99, F14.10-F14.99  F16.10-F16.99  F45.42  G89.21-G89.4"
  },
  {
     "Policy #": "2.04.99",
     "Full Policy": "Genetic Testing for Hereditary Pancreatitis",
     "CPT": "81222, 81223, 81401, 81404, 81405, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K85.0-K85.92 , K86.1"
  },
  {
     "Policy #": "2.04.100",
     "Full Policy": "Cardiovascular Risk Panels",
     "CPT": "81291, 82465, 82652, 83090, 83698, 83718, 83721, 83722, 83880, 84478, 86141, 81599, 0119U, 0052U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No Specific codes--CPTs for components only",
     "ICD10 Diagnosis codes": "Z13.6, Z82.41, Z82.49"
  },
  {
     "Policy #": "2.04.101",
     "Full Policy": "Genetic Testing for Li-Fraumeni Syndrome",
     "CPT": "81404, 81405, 81479, 0102U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z15.01"
  },
  {
     "Policy #": "2.04.102",
     "Full Policy": "Whole Exome and Whole Genome Sequencing for Diagnosis of Genetic Disorders",
     "CPT": "81415, 81416, 81417, 81425, 81426, 81427, 0036U, 0094U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.103",
     "Full Policy": "Genetic Testing for Macular Degeneration",
     "CPT": "81401, 81405, 81408, 81479, 81599",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H35.30, H35.3110-H35.3194, H35.3210-H35.3293, Z13.5"
  },
  {
     "Policy #": "2.04.104",
     "Full Policy": "Genetic Testing for a-Thalassemia",
     "CPT": "81257, 81258, 81259, 81269",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z31.430, Z31.440"
  },
  {
     "Policy #": "2.04.105",
     "Full Policy": "Genetic Testing for Facioscapulohumeral Muscular Dystrophy",
     "CPT": 81404,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G71.02"
  },
  {
     "Policy #": "2.04.106",
     "Full Policy": "Genetic Testing for CHARGE Syndrome",
     "CPT": 81407,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Q99.8"
  },
  {
     "Policy #": "2.04.108",
     "Full Policy": "Noninvasive Fetal RHD Genotyping Using Cell-Free Fetal DNA",
     "CPT": 81403,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "O36.0110- O36.0199, Z31.82"
  },
  {
     "Policy #": "2.04.109",
     "Full Policy": "Genetic Testing for Epilepsy",
     "CPT": "81401, 81403, 81404, 81405, 81406, 81407",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G40.001-G40.919"
  },
  {
     "Policy #": "2.04.110",
     "Full Policy": "Genetic Testing for Diagnosis and Management of Mental Health Conditions",
     "CPT": "81225, 81226, 81291, 81479, 0029U, 0031U, 0032U, 0033U, 0070U-0076U, 0156U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.111",
     "Full Policy": "Gene Expression Profiling and Protein Biomarkers for Prostate Cancer Management",
     "CPT": "81541, 81542, 81599, 0005U, 0047U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C61"
  },
  {
     "Policy #": "2.04.114",
     "Full Policy": "Genetic Testing for Dilated Cardiomyopathy",
     "CPT": "81403, 81405, 81406, 81407, 81439, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I42.0"
  },
  {
     "Policy #": "2.04.115",
     "Full Policy": "Comprehensive Genomic Profiling for Selecting Targeted Cancer Therapies",
     "CPT": "81445, 81450, 81455, 88342, 88381, 0013U, 0014U, 0019U, 0022U, 0036U, 0037U, 0048U, 0056U, 0101U, 0102U, 0103U, 0111U, 0006M, 81479 or 81599",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C00-D49"
  },
  {
     "Policy #": "2.04.117",
     "Full Policy": "Genetic Testing of Mitochondrial Disorders",
     "CPT": "81401, 81403,81404, 81405, 81406, 81440, 81479, 81460, 81465",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E88.40, E88.41, E88.42, E88.49, G31.82, H49.811-H49.819 "
  },
  {
     "Policy #": "2.04.119",
     "Full Policy": "Multi-Biomarker Disease Activity Blood Test for Rheumatoid Arthritis",
     "CPT": 81490,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M05.00-M06.9"
  },
  {
     "Policy #": "2.04.120",
     "Full Policy": "Gene Expression Profiling for Uveal Melanoma",
     "CPT": 81552,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C69.30-C69.32, C69.40-C69.42, C69.80-C69.82, C69.90-C69.92"
  },
  {
     "Policy #": "2.04.122",
     "Full Policy": "Chromosomal Microarray Testing for the Evaluation of Pregnancy Loss",
     "CPT": "81228, 81229, 88261, 88262, 88263, 88271 ",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes",
     "ICD10 Diagnosis codes": "N96, O26.20-O26.23"
  },
  {
     "Policy #": "2.04.123",
     "Full Policy": "Serum Biomarker Panel Testing for Systemic Lupus Erythematosus and Other Connective Tissue Diseases",
     "CPT": "83520, 86038, 86039, 86146, 86147, 86200, 86225, 86235, 86376, 86800, 88184, 88185, 88187, 88188, 84999, 81599, 0039U, 0062U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "D89.82, D89.89, D89.9, L40.50-L40.59, M06.4, M12.80-M12.89, M12.9, M19.90-M19.93, M32.0-M32.9, M35.9, M79.0, M79.1, R53.8"
  },
  {
     "Policy #": "2.04.124",
     "Full Policy": "Genetic Testing for FLT3, NPM1, and CEBPA Variants in Cytogenetically Normal Acute Myeloid Leukemia",
     "CPT": "81218, 81245, 81246, 81310, 0023U, 0046U, 0049U, 0050U, 0056U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C92.00-C92.02, C92.60-C92.62, C92.A0-C92.A2 "
  },
  {
     "Policy #": "2.04.125",
     "Full Policy": "Proteomic Testing for Systemic Therapy in Non-Small-Cell Lung Cancer",
     "CPT": "81235, 81538",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C34.10-C34.92"
  },
  {
     "Policy #": "2.04.127",
     "Full Policy": "Multitarget Polymerase Chain Reaction Testing for Diagnosis of Baterial Vaginosis",
     "CPT": "87491, 87591, 87481, 87512, 87661, 87999",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "A54.02, A56.02, A59.01, B37.3, N76.0-N76.1 , N77.1"
  },
  {
     "Policy #": "2.04.128",
     "Full Policy": "Genetic Testing for Fanconi Anemia",
     "CPT": "81242, 81479",
     "HCPCS": "No HCPCS"
  },
  {
     "Policy #": "2.04.129",
     "Full Policy": "Genetic Testing for Marfan Syndrome, Thoracic Aortic Aneurysms and Dissections, and Related Disorders",
     "CPT": "81401, 81405, 81408, 81410, 81411, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z82.79",
     "Comments for ICD10's": "Multiple codes might possibly be used for signs and symptoms of a connective tissue disorder"
  },
  {
     "Policy #": "2.04.130",
     "Full Policy": "ST2 Assay for Chronic Heart Failure and Heart Transplant Rejection",
     "CPT": "83006, 0055U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I50.1-I50.9"
  },
  {
     "Policy #": "2.04.131",
     "Full Policy": "Pharmacogenetic Testing for Pain Management",
     "CPT": "81225, 81226, 81227, 81291, 81401, 81479, 0028U, 0070U-0076U, 0078U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G89.0-G89.4, R52 "
  },
  {
     "Policy #": "2.04.132",
     "Full Policy": "Genetic Testing for Limb-Girdle Muscular Dystrophies",
     "CPT": "81400, 81404, 81405, 81406, 81408, 81479",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G71.0, Z13.71, Z31.430, Z31.440, Z82.0"
  },
  {
     "Policy #": "2.04.136",
     "Full Policy": "Nutrient Nutritional Panel Testing",
     "CPT": "82128, 82136, 82139, 84999",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "Tests in the panel that have specific CPT codes 82746, 83735, 83785, 84590, and 84630",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "2.04.137",
     "Full Policy": "Genetic Testing for Neurofibromatosis",
     "CPT": "81405, 81406, 81408",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Q85.00-Q85.09"
  },
  {
     "Policy #": "2.04.140",
     "Full Policy": "Proteogenomic Testing in Patients with Cancer",
     "CPT": 81479,
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific code for this test.",
     "ICD10 Diagnosis codes": "C00.0-C96.9"
  },
  {
     "Policy #": "2.04.141",
     "Full Policy": "Circulating Tumor DNA and Circulating Tumor Cells for Cancer Management (Liquid Biopsy)",
     "CPT": "81400, 81401, 81402, 81403. 81404, 81405, 81406, 81407, 81408, 81409, 81479. 86152, 86153, 0091U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific code may be reported with 81400-81408, Note: Adding back 0091U eff 07/01/2019, per Policy",
     "ICD10 Diagnosis codes": "C00.0-C96.9"
  },
  {
     "Policy #": "2.04.142",
     "Full Policy": "Molecular Testing in the Management of Pulmonary Nodules",
     "CPT": "83520, 84999, 0080U, 0092U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "R91.1"
  },
  {
     "Policy #": "2.04.143",
     "Full Policy": "Circulating Tumor DNA Management of Non-Small-Cell Lung Cancer (Liquid Biopsy)",
     "CPT": "81210, 81235, 81445, 81455, 81479, 86152, 86153",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "Panels that include EGFR Gene 81445, 81455",
     "ICD10 Diagnosis codes": "C00.0-C96.9"
  },
  {
     "Policy #": "2.04.146",
     "Full Policy": "Gene Expression Profiling for Cutaneous Melanoma",
     "CPT": "81479, 81552, 81599, 84999, 0089U, 0090U",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Z12.83, Z80.8, C43.0-C43.9, C4A.0-C4A.9, C44.0-C44.99, D03.0-D03.9, D04.0-D04.9, L81.0-L81.9"
  },
  {
     "Policy #": "2.04.147",
     "Full Policy": "Next-Generation Sequencing for the Assessment of Measurable Residual Disease",
     "CPT": "81479, 81599, 0171U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "New Code eff 07/01/2020",
     "ICD10 Diagnosis codes": "C81.00-C96.9"
  },
  {
     "Policy #": "4.01.11",
     "Full Policy": "Occlusion of Uterine Arteries Using Transcatheter Embolization",
     "CPT": "37243, 36244, 36245, 36246, 36247",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D25.0-D25.9, O00.8, O72.0-O72.2 "
  },
  {
     "Policy #": "4.01.19",
     "Full Policy": "Laparoscopic and Percutaneous Techniques for the Myolysis of Uterine Fibroids",
     "CPT": "58578, 58674, 58999, 77022, 76940, 76998",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D25.0-D25.9"
  },
  {
     "Policy #": "4.01.21",
     "Full Policy": "Noninvasive Prenatal Screening for Fetal Aneuploidies and Microdeletions Using Cell-Free Fetal DNA",
     "CPT": "81420, 81422, 81599, 81479, 81507, 88271, 0124U, 0125U, 0126U, 0168U",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "New Code eff 07/01/2020",
     "ICD10 Diagnosis codes": "O09.511, Z31.430-Z31.438, Z36"
  },
  {
     "Policy #": "5.01.01",
     "Brand Drug Name": "Hepatitis B Interon A Monotherapy",
     "Full Policy": "Intron A (interferon alfa-2b)",
     "HCPCS": "J9214"
  },
  {
     "Policy #": "5.01.05",
     "Brand Drug Name": "Intron A Hepatitis C",
     "Full Policy": "Intron A (interferon alfa-2b)",
     "HCPCS": "J9214"
  },
  {
     "Policy #": "5.01.06",
     "Brand Drug Name": "Intron A Ribavirin ",
     "Full Policy": "Intron A (interferon alfa-2b) with ribavirin, (Moderiba, Rebetol, Ribasphere, RibaTab, ribavirin tablets/capsules - all strengths)",
     "HCPCS": "J9214"
  },
  {
     "Policy #": "5.01.15",
     "Brand Drug Name": "Injectable Antibiotics",
     "Full Policy": "IV Antibiotics include: Ceftriaxone, Cefotaxime sodium, Doxycycline Hyclate, Penicillin G potassium, Colistimethate, Daptomycin, Gentamicin, Streptomycin, Tobramycin, Vancomycin (list not inclusive) ",
     "HCPCS": "J0696, J0698, J2540, J3490",
     "Comments for Procedure codes": "Pharmacy only benefit as codes do not edit"
  },
  {
     "Policy #": "5.01.17",
     "Brand Drug Name": "Relenza ",
     "Full Policy": "Relenza (zanamivir)",
     "HCPCS": "G9018, G9034"
  },
  {
     "Policy #": "5.01.18",
     "Brand Drug Name": "Itraconazole",
     "Full Policy": "Onmel (itraconazole); Sporanox (itraconazole); Tolsura (itraconazole)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.19",
     "Brand Drug Name": "Tamiflu ",
     "Full Policy": "Tamiflu (oseltamivir)",
     "HCPCS": "G9019"
  },
  {
     "Policy #": "5.01.20",
     "Brand Drug Name": "Zyvox ",
     "Full Policy": "Zyvox (linezolid)",
     "HCPCS": "J2020"
  },
  {
     "Policy #": "5.01.22",
     "Brand Drug Name": "Valcyte ",
     "Full Policy": "Valcyte (valganciclovir)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.01.23",
     "Brand Drug Name": "Ketoconazole ",
     "Full Policy": "Ketoconazole tablets",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.25",
     "Brand Drug Name": "Sovaldi Pegasys PegIntron Ribavirin",
     "Full Policy": "Sovaldi (sofosbuvir) with Pegasys (peginterferon alfa-2a); Sovaldi (sofosbuvir) with PegIntron (peginterferon alfa-2b) and Ribavirin and Ribavirin (Copegus, Moderiba, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin)",
     "HCPCS": "J8499, J3490"
  },
  {
     "Policy #": "5.01.30",
     "Brand Drug Name": "Sovaldi Olysio Ribavirin",
     "Full Policy": "Sovaldi (sofosbuvir) with Olysio (simeprevir) and Ribavirin (Copegus, Moderiba, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.31",
     "Brand Drug Name": "Sivextro",
     "Full Policy": "Sivextro (tedizolid)",
     "HCPCS": "J3090"
  },
  {
     "Policy #": "5.01.34",
     "Brand Drug Name": "Xifaxan",
     "Full Policy": "Xifaxan (rifaximin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.35",
     "Brand Drug Name": "Cresemba",
     "Full Policy": "Cresemba (isavuconazonium)",
     "HCPCS": "J1833"
  },
  {
     "Policy #": "5.01.38",
     "Brand Drug Name": "Daraprim",
     "Full Policy": "Daraprim (pyrimethamine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.01.41",
     "Brand Drug Name": "Hepatitis C Agents",
     "Full Policy": "Epclusa (sofosbuvir & velpatasvir), Harvoni (ledipasvir& sofosbuvir), Sovaldi (sofosbuvir), Mavyret (glecaprevir and pibrentasvir), , Vosevi (sofosbuvir, velpatasvir, & voxilaprevir), Zepatier (elbasvir, grazoprevir)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.42",
     "Brand Drug Name": "Anthelmintic Drugs",
     "Full Policy": "Albenza (albendazole), Emverm (mebendazole)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.43",
     "Brand Drug Name": "Prevymis",
     "Full Policy": "Prevymis (letermovir)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.01.44",
     "Brand Drug Name": "Vfend",
     "Full Policy": "Vfend IV injection, tablets, suspension (voriconazole)",
     "HCPCS": "J3465, J8499"
  },
  {
     "Policy #": "5.01.45",
     "Brand Drug Name": "Trogarzo",
     "Full Policy": "Trogarzo (ibalizumab-uiyk)",
     "HCPCS": "J1746"
  },
  {
     "Policy #": "5.01.46",
     "Brand Drug Name": "Xepi",
     "Full Policy": "Xepi (ozenoxacin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.01.47",
     "Brand Drug Name": "Pegasys Pegintron Ribavirin",
     "Full Policy": "Pegasys (peginterferon alfa-2a), Pegintron (peginterferon alfa-2b), Ribavirin (Moderiba, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin tablets/capsules)",
     "HCPCS": "J3490, S0145, S0149"
  },
  {
     "Policy #": "5.01.48",
     "Brand Drug Name": "Arikayce",
     "Full Policy": "Arikayce (amikacin liposome inhalation suspension)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.01.49",
     "Brand Drug Name": "Xofluza",
     "Full Policy": "Xofluza (baloxavir marboxil) tablets",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.50",
     "Brand Drug Name": "Aemcolo",
     "Full Policy": "Aemcolo (rifamycin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.52",
     "Brand Drug Name": "Noxafil",
     "Full Policy": "Noxafil (posaconazole) delayed-release tablets, Noxafil (posaconazole) oral suspension",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.01.53",
     "Brand Drug Name": "Nuzyra",
     "Full Policy": "Nuzyra (omadacycline)",
     "HCPCS": "J0121",
     "Comments for Procedure codes": "Added to PA eff 12/20/2019"
  },
  {
     "Policy #": "5.01.54",
     "Brand Drug Name": "Baxdela",
     "Full Policy": "Baxdela (delafloxacin)",
     "HCPCS": "C9462",
     "Comments for Procedure codes": "Added to PA eff 01/10/2020"
  },
  {
     "Policy #": "5.01.55",
     "Brand Drug Name": "Xenleta",
     "Full Policy": "Xenleta (lefamulin)",
     "HCPCS": "C9054",
     "Comments for Procedure codes": "Added to PA eff 02/07/2020, New code eff 04/01/2020"
  },
  {
     "Policy #": "5.03.03",
     "Brand Drug Name": "Hepatitis C Infergen Monotherapy",
     "Full Policy": "Infergen (interferon alfacon-1)",
     "HCPCS": "J9212"
  },
  {
     "Policy #": "5.03.04",
     "Brand Drug Name": "Hepatitis C Infergen with Ribavirin ",
     "Full Policy": "Infergen (interferon alfacon-1) with Ribavirin (Copegus, Rebetol, RibaPak, Ribasphere, RibaTab, ribavirin tablets/capsules - all strengths)",
     "HCPCS": "J9212"
  },
  {
     "Policy #": "5.17.01",
     "Brand Drug Name": "Vimovo",
     "Full Policy": "Vimovo (delayed-release enteric-coated naproxen with esomeprazole)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.20.01",
     "Brand Drug Name": "Atgam",
     "Full Policy": "Atgam (lymphocyte immune globulin, anti-thymocyte globulin [equine])",
     "HCPCS": "J7504"
  },
  {
     "Policy #": "5.20.02",
     "Brand Drug Name": "GamaSTAN SD",
     "Full Policy": "GamaSTAN S/D (IGIM)",
     "HCPCS": "J1560"
  },
  {
     "Policy #": "5.20.03",
     "Brand Drug Name": "IVIG (intravenous immunoglobulin)",
     "Full Policy": "Asceniv, Bivigam, Carimune NF, Flebogamma, Gammagard, Gammagard S/D, Gammaked, Gammaplex, Gamunex-C, Octagam, Privigen, Panzyga,",
     "HCPCS": "C9399, J1459, J1556, J1557, J1561, J1566, J1568, J1569, J1572",
     "Comments for Procedure codes": "Added to PA eff 01/10/2020"
  },
  {
     "Policy #": "5.20.04",
     "Brand Drug Name": "Synagis",
     "Full Policy": "Synagis (palivizumab)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.20.05",
     "Brand Drug Name": "Ragwitek",
     "Full Policy": "Ragwitek (Short Ragweed Pollen Allergen Extract)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.20.06",
     "Brand Drug Name": "Oralair",
     "Full Policy": "Oralair (Sweet Vernal, Orchard, Perennial Rye, Timothy, and Kentucky Blue Grass Mixed Pollens Allergen Extract)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.20.07",
     "Brand Drug Name": "Grastek",
     "Full Policy": "Grastek (timothy grass pollen allergen extract)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.20.08",
     "Brand Drug Name": "SCIG Immune Globulin (subcutaneous immunoglobulin)",
     "Full Policy": "SCIG Immune Globulin – Cutaquig, Cuvitru, Hizentra, Hyqvia, Xembify",
     "HCPCS": "C9399, J1555, J1559, J1575",
     "Comments for Procedure codes": "Note: J1559 has been relocated from 5.20.03 to 5.20.08 and J1555 was missing"
  },
  {
     "Policy #": "5.20.10",
     "Brand Drug Name": "Sylvant",
     "Full Policy": "Sylvant (situximab)",
     "HCPCS": "J2860"
  },
  {
     "Policy #": "5.20.11",
     "Brand Drug Name": "Odactra",
     "Full Policy": "Odactra (house dust mite allergen extract)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.20.12",
     "Brand Drug Name": "Palforzia",
     "Full Policy": "Palforzia [Peanut (Arachis hypoqaea) Allergen Powder-dnfp]",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "Added to PA eff 03/06/2020"
  },
  {
     "Policy #": "5.21.01",
     "Brand Drug Name": "Actimmune ",
     "Full Policy": "Actimmune (interferon gamma-1B)",
     "HCPCS": "J9216"
  },
  {
     "Policy #": "5.21.03",
     "Brand Drug Name": "Arzerra",
     "Full Policy": "Arzerra (ofatumumab)",
     "HCPCS": "J9302"
  },
  {
     "Policy #": "5.21.04",
     "Brand Drug Name": "Avastin",
     "Full Policy": "Avastin (bevacizumab), Mvasi (bevacizumab-awwb), Zirabev (bevacizumab-bvzr)*",
     "HCPCS": "J9035, C9257, Q5107, Q5118"
  },
  {
     "Policy #": "5.21.05",
     "Brand Drug Name": "Venclexta",
     "Full Policy": "Venclexta (venetoclax)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.06",
     "Brand Drug Name": "Trastuzumab",
     "Full Policy": "Herceptin (trastuzumab), Herzuma (trastuzumab-pkrb)*, Ogivri (trastuzumab-dkst)*, Ontruzant (trastuzumab-dttb)*, Trazimera (trastuzumab-qyyp)* Kanjinti (trastuzumab-anns)",
     "HCPCS": "J9355, Q5112, Q5113, Q5114, Q5116, Q5117"
  },
  {
     "Policy #": "5.21.07",
     "Brand Drug Name": "Intron A",
     "Full Policy": "Intron A (interferon alfa-2b)",
     "HCPCS": "J9214"
  },
  {
     "Policy #": "5.21.08",
     "Brand Drug Name": "Kepivance ",
     "Full Policy": "Kepivance (palifermin)",
     "HCPCS": "J2425"
  },
  {
     "Policy #": "5.21.09",
     "Brand Drug Name": "Provenge ",
     "Full Policy": "Provenge (sipuleucel-T)",
     "HCPCS": "Q2043"
  },
  {
     "Policy #": "5.21.10",
     "Brand Drug Name": "Rituximab",
     "Full Policy": "Rituxan (rituximab), Truxima (rituximab-abbs), Ruxience (rituximab-pvvr)",
     "HCPCS": "J3590, J9312, Q5115"
  },
  {
     "Policy #": "5.21.12",
     "Brand Drug Name": "Xalkori ",
     "Full Policy": "Xalkori (crizotinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.13",
     "Brand Drug Name": "Yervoy ",
     "Full Policy": "Yervoy (ipilimumab)",
     "HCPCS": "J9228"
  },
  {
     "Policy #": "5.21.14",
     "Brand Drug Name": "Zelboraf ",
     "Full Policy": "Zelboraf (vemurafenib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.15",
     "Brand Drug Name": "Zolinza ",
     "Full Policy": "Zolinza (vorinostat)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.16",
     "Brand Drug Name": "Caprelsa ",
     "Full Policy": "Caprelsa (vandetanib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.16",
     "Brand Drug Name": "Afrezza",
     "Full Policy": "Afrezza (insulin human)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.21.17 ",
     "Brand Drug Name": "Erwinaze ",
     "Full Policy": "Erwinaze (asparaginase Erwinia chrysanthemi)",
     "HCPCS": "J9019"
  },
  {
     "Policy #": "5.21.18",
     "Brand Drug Name": "Jakafi ",
     "Full Policy": "Jakafi (ruxolitinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.19",
     "Brand Drug Name": "Adcetris ",
     "Full Policy": "Adcetris (brentuximab vedotin)",
     "HCPCS": "J9042"
  },
  {
     "Policy #": "5.21.20",
     "Brand Drug Name": "Perjeta",
     "Full Policy": "Perjeta (pertuzumab)",
     "HCPCS": "J9306"
  },
  {
     "Policy #": "5.21.21",
     "Brand Drug Name": "Xtandi ",
     "Full Policy": "Xtandi (enzalutamide)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.22",
     "Brand Drug Name": "Bosulif ",
     "Full Policy": "Bosulif (bosutinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.23",
     "Brand Drug Name": "Tykerb",
     "Full Policy": "Tykerb (lapatinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.24",
     "Brand Drug Name": "Kyprolis ",
     "Full Policy": "Kyprolis (carfilzomib)",
     "HCPCS": "J9047"
  },
  {
     "Policy #": "5.21.25",
     "Brand Drug Name": "Zaltrap ",
     "Full Policy": "Zaltrap (ziv-aflibercept)",
     "HCPCS": "J9400"
  },
  {
     "Policy #": "5.21.26",
     "Brand Drug Name": "Stivarga ",
     "Full Policy": "Stivarga (regorafenib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.27",
     "Brand Drug Name": "Jevtana ",
     "Full Policy": "Jevtana (cabazitaxel)",
     "HCPCS": "J9043"
  },
  {
     "Policy #": "5.21.28",
     "Brand Drug Name": "Zytiga ",
     "Full Policy": "Zytiga (abiraterone acetate)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.29",
     "Brand Drug Name": "Gazyva",
     "Full Policy": "Gazyva (obinutuzumab)",
     "HCPCS": "J9301"
  },
  {
     "Policy #": "5.21.30",
     "Brand Drug Name": "Iclusig ",
     "Full Policy": "Iclusig (ponatinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.31",
     "Brand Drug Name": "Synribo ",
     "Full Policy": "Synribo (omacetaxine mepesuccinate)",
     "HCPCS": "J9262"
  },
  {
     "Policy #": "5.21.32",
     "Brand Drug Name": "Kadcyla",
     "Full Policy": "Kadcyla (ado-trastuzumab)",
     "HCPCS": "J9354"
  },
  {
     "Policy #": "5.21.33",
     "Brand Drug Name": "Cometriq ",
     "Full Policy": "Cometriq (cabozantinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.34",
     "Brand Drug Name": "Inlyta ",
     "Full Policy": "Inlyta (axitinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.35",
     "Brand Drug Name": "Erivedge ",
     "Full Policy": "Erivedge (vismodegib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.36",
     "Brand Drug Name": "Pomalyst ",
     "Full Policy": "Pomalyst (pomalidomide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.21.37",
     "Brand Drug Name": "Tafinlar",
     "Full Policy": "Tafinlar (dabrafenib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.38",
     "Brand Drug Name": "Mekinist",
     "Full Policy": "Mekinist (trametinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.39",
     "Brand Drug Name": "Gilotrif",
     "Full Policy": "Gilotrif (afatinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.40",
     "Brand Drug Name": "Valchlor",
     "Full Policy": "Valchlor (mechlorethamine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.21.41",
     "Brand Drug Name": "Imbruvica",
     "Full Policy": "Imbruvica (ibrutinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.42",
     "Brand Drug Name": "Marqibo",
     "Full Policy": "Marqibo (vincristine liposome injection)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.43",
     "Brand Drug Name": "Treanda, Bendeka, Belrapzo",
     "Full Policy": "Treanda, Bendeka, Belrapzo (bendamustine)",
     "HCPCS": "C9042, J9033, J9034 "
  },
  {
     "Policy #": "5.21.44",
     "Brand Drug Name": "Cyramza",
     "Full Policy": "Cyramza (ramucirumab)",
     "HCPCS": "J9308"
  },
  {
     "Policy #": "5.21.45",
     "Brand Drug Name": "Velcade",
     "Full Policy": "Velcade (bortezomib)",
     "HCPCS": "J9041, J9044"
  },
  {
     "Policy #": "5.21.46",
     "Brand Drug Name": "Zykadia",
     "Full Policy": "Zykadia (ceritinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.47",
     "Brand Drug Name": "Revlimid",
     "Full Policy": "Revlimid (lenalidomide)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.48",
     "Brand Drug Name": "Beleodaq",
     "Full Policy": "Beleodaq (belinostat)",
     "HCPCS": "J9032"
  },
  {
     "Policy #": "5.21.49",
     "Brand Drug Name": "Zydelig",
     "Full Policy": "Zydelig (idelalisib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.50",
     "Brand Drug Name": "Keytruda",
     "Full Policy": "Keytruda (pembrolizumab)",
     "HCPCS": "J9271"
  },
  {
     "Policy #": "5.21.51",
     "Brand Drug Name": "Blincyto",
     "Full Policy": "Blincyto (blinatumomab)",
     "HCPCS": "J9039"
  },
  {
     "Policy #": "5.21.52",
     "Brand Drug Name": "Lynparza",
     "Full Policy": "Lynparza (olaparib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.53",
     "Brand Drug Name": "Opdivo",
     "Full Policy": "Opdivo (nivolumab)",
     "HCPCS": "J9299"
  },
  {
     "Policy #": "5.21.54",
     "Brand Drug Name": "Ibrance",
     "Full Policy": "Ibrance (palbociclib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.55",
     "Brand Drug Name": "Lenvima",
     "Full Policy": "Lenvima (lenvatinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.56",
     "Brand Drug Name": "Farydak",
     "Full Policy": "Farydak (panobinostat)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.57",
     "Brand Drug Name": "Istodax",
     "Full Policy": "Istodax (romidepsin)",
     "HCPCS": "J9315"
  },
  {
     "Policy #": "5.21.58",
     "Brand Drug Name": "Unituxin",
     "Full Policy": "Unituxin (dinutuximab)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.59",
     "Brand Drug Name": "Iressa",
     "Full Policy": "Iressa (gefitinib)",
     "HCPCS": "J8565"
  },
  {
     "Policy #": "5.21.60",
     "Brand Drug Name": "Nexavar",
     "Full Policy": "Nexavar (sorafenib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.61",
     "Brand Drug Name": "Odomzo",
     "Full Policy": "Odomzo (sonidegib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.62",
     "Brand Drug Name": "Afinitor",
     "Full Policy": "Afinitor (everolimus)",
     "HCPCS": "J7527"
  },
  {
     "Policy #": "5.21.63",
     "Brand Drug Name": "Sprycel",
     "Full Policy": "Sprycel (dasatinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.64",
     "Brand Drug Name": "Lonsurf",
     "Full Policy": "Lonsurf (trifluridine tipiracil)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.65",
     "Brand Drug Name": "Yondelis",
     "Full Policy": "Yondelis (trabectedin)",
     "HCPCS": "J9352"
  },
  {
     "Policy #": "5.21.66",
     "Brand Drug Name": "Imlygic",
     "Full Policy": "Imlygic (talimogene laherparepvec)",
     "HCPCS": "J9325"
  },
  {
     "Policy #": "5.21.67",
     "Brand Drug Name": "Onivyde",
     "Full Policy": "Onivyde (irinotecan liposome injection)",
     "HCPCS": "J9205"
  },
  {
     "Policy #": "5.21.68",
     "Brand Drug Name": "Cotellic",
     "Full Policy": "Cotellic (cobimetinib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.69",
     "Brand Drug Name": "Tagrisso",
     "Full Policy": "Tagrisso (osimertinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.70",
     "Brand Drug Name": "Darzalex",
     "Full Policy": "Darzalex (daratumumab)",
     "HCPCS": "J9145"
  },
  {
     "Policy #": "5.21.71",
     "Brand Drug Name": "Ninlaro",
     "Full Policy": "Ninlaro (ixazomib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.72",
     "Brand Drug Name": "Portrazza",
     "Full Policy": "Portrazza (necitumumab)",
     "HCPCS": "J9295"
  },
  {
     "Policy #": "5.21.73",
     "Brand Drug Name": "Empliciti",
     "Full Policy": "Empliciti (elotuzumab)",
     "HCPCS": "J9176"
  },
  {
     "Policy #": "5.21.74",
     "Brand Drug Name": "Gleevec",
     "Full Policy": "Gleevec (imatinib)",
     "HCPCS": "S0088"
  },
  {
     "Policy #": "5.21.75",
     "Brand Drug Name": "Alecensa",
     "Full Policy": "Alecensa (alectinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.76",
     "Brand Drug Name": "Halaven",
     "Full Policy": "Halaven (eribulin mesylate)",
     "HCPCS": "J9179"
  },
  {
     "Policy #": "5.21.77",
     "Brand Drug Name": "Tasigna",
     "Full Policy": "Tasigna (nilotinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.78",
     "Brand Drug Name": "Evomela",
     "Full Policy": "Evomela (melphalan)",
     "HCPCS": "J9245"
  },
  {
     "Policy #": "5.21.79",
     "Brand Drug Name": "Cabometyx",
     "Full Policy": "Cabometyx (cabozantinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.80",
     "Brand Drug Name": "Tecentriq",
     "Full Policy": "Tecentriq (atezolizumab)",
     "HCPCS": "J9022"
  },
  {
     "Policy #": "5.21.81",
     "Brand Drug Name": "Targretin",
     "Full Policy": "Targretin (bexarotene)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.82",
     "Brand Drug Name": "Tarceva",
     "Full Policy": "Tarceva (erlotinib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.83",
     "Brand Drug Name": "Votrient",
     "Full Policy": "Votrient (pazopanib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.84",
     "Brand Drug Name": "Erbitux",
     "Full Policy": "Erbitux (cetuximab)",
     "HCPCS": "J9055"
  },
  {
     "Policy #": "5.21.85",
     "Brand Drug Name": "Vectibix",
     "Full Policy": "Vectibix (panitumumab)",
     "HCPCS": "J9303"
  },
  {
     "Policy #": "5.21.86",
     "Brand Drug Name": "Nilandron",
     "Full Policy": "Nilandron (nilutamide)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.87",
     "Brand Drug Name": "Rubraca",
     "Full Policy": "Rubraca (rucaparib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.88",
     "Brand Drug Name": "Kisqali",
     "Full Policy": "Kisqali (ribociclib), Kisqali Femara Co-Pack (ribociclib & letrozole)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.89",
     "Brand Drug Name": "Bavencio",
     "Full Policy": "Bavencio (avelumab)",
     "HCPCS": "J9023"
  },
  {
     "Policy #": "5.21.90",
     "Brand Drug Name": "Zejula",
     "Full Policy": "Zejula (niraparib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.91",
     "Brand Drug Name": "Lartruvo",
     "Full Policy": "Lartruvo (olaratumab)",
     "HCPCS": "J9285"
  },
  {
     "Policy #": "5.21.92",
     "Brand Drug Name": "Alunbrig",
     "Full Policy": "Alunbrig (brigatinib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.93",
     "Brand Drug Name": "Rydapt",
     "Full Policy": "Rydapt (midostaurin)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.94",
     "Brand Drug Name": "Imfinzi",
     "Full Policy": "Imfinzi (durvalumab)",
     "HCPCS": "J9173"
  },
  {
     "Policy #": "5.21.95",
     "Brand Drug Name": "Sutent",
     "Full Policy": "Sutent (sunitinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.96",
     "Brand Drug Name": "Rituxan ",
     "Full Policy": "Rituxan Hycela (rituximab and hyaluronidase human)",
     "HCPCS": "J9311"
  },
  {
     "Policy #": "5.21.97",
     "Brand Drug Name": "Nerlynx",
     "Full Policy": "Nerlynx (neratinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.98",
     "Brand Drug Name": "Idhifa",
     "Full Policy": "Idhifa (enasidenib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.99",
     "Brand Drug Name": "Vyxeos",
     "Full Policy": "Vyxeos (daunorubicin and cytarabine)",
     "HCPCS": "J9153"
  },
  {
     "Policy #": "5.21.100",
     "Brand Drug Name": "Besponsa",
     "Full Policy": "Besponsa (inotuzumab ozogamicin)",
     "HCPCS": "J9229"
  },
  {
     "Policy #": "5.21.101",
     "Brand Drug Name": "Kymriah",
     "Full Policy": "Kymriah (tisagenlecleucel)",
     "HCPCS": "Q2042",
     "Comments for Procedure codes": "Medical only benefit"
  },
  {
     "Policy #": "5.21.102",
     "Brand Drug Name": "Mylotarg",
     "Full Policy": "Mylotarg (gemtuzumab ozogamicin)",
     "HCPCS": "J9203"
  },
  {
     "Policy #": "5.21.103",
     "Brand Drug Name": "Aliqopa",
     "Full Policy": "Aliqopa (copanlisib)",
     "HCPCS": "J9057"
  },
  {
     "Policy #": "5.21.104",
     "Brand Drug Name": "Verzenio",
     "Full Policy": "Verzenio (abemaciclib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.105",
     "Brand Drug Name": "Yescarta",
     "Full Policy": "Yescarta (axicabtagene ciloleucel)",
     "HCPCS": "Q2041",
     "Comments for Procedure codes": "Medical only benefit"
  },
  {
     "Policy #": "5.21.106",
     "Brand Drug Name": "Calquence",
     "Full Policy": "Calquence (acalabrutinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.107",
     "Brand Drug Name": "Lutathera",
     "Full Policy": "Lutathera (lutetium Lu 177 dotatate)",
     "HCPCS": "A9513"
  },
  {
     "Policy #": "5.21.108",
     "Brand Drug Name": "Erleada",
     "Full Policy": "Erleada (apalutamide)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.109",
     "Brand Drug Name": "Yonsa",
     "Full Policy": "Yonsa (abiraterone acetate)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.110",
     "Brand Drug Name": "Braftovi",
     "Full Policy": "Braftovi (encorafenib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.111",
     "Brand Drug Name": "Mektovi",
     "Full Policy": "Mektovi (binimetinib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.112",
     "Brand Drug Name": "Tibsovo",
     "Full Policy": "Tibsovo (ivosidenib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.113",
     "Brand Drug Name": "Azedra",
     "Full Policy": "Azedra (iobenguane I 131)",
     "HCPCS": "A9590"
  },
  {
     "Policy #": "5.21.114",
     "Brand Drug Name": "Poteligeo",
     "Full Policy": "Poteligeo (mogamulizumab-kpkc)",
     "HCPCS": "J9204"
  },
  {
     "Policy #": "5.21.115",
     "Brand Drug Name": "Lumoxiti",
     "Full Policy": "Lumoxiti (moxetumomab pasudotox-tdfk)",
     "HCPCS": "J9313"
  },
  {
     "Policy #": "5.21.116",
     "Brand Drug Name": "Copiktra",
     "Full Policy": "Copiktra (duvelisib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.117",
     "Brand Drug Name": "Vizimpro",
     "Full Policy": "Vizimpro (dacomitinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.118",
     "Brand Drug Name": "Libtayo",
     "Full Policy": "Libtayo (cemiplimab-rwlc)",
     "HCPCS": "J9119"
  },
  {
     "Policy #": "5.21.119",
     "Brand Drug Name": "Talzenna",
     "Full Policy": "Talzenna (talazoparib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.120",
     "Brand Drug Name": "Lorbrena",
     "Full Policy": "Lorbrena (lorlatinib)",
     "HCPCS": "J9999"
  },
  {
     "Policy #": "5.21.121",
     "Brand Drug Name": "Daurismo",
     "Full Policy": "Daurismo (glasdegib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.122",
     "Brand Drug Name": "Vitrakvi",
     "Full Policy": "Vitrakvi (larotrectinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.123",
     "Brand Drug Name": "Xospata",
     "Full Policy": "Xospata (gilteritinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.124",
     "Brand Drug Name": "Elzonris",
     "Full Policy": "Elzonris (tagraxofusp-erzs)",
     "HCPCS": "J9269"
  },
  {
     "Policy #": "5.21.125",
     "Brand Drug Name": "Asparlas",
     "Full Policy": "Asparlas (calaspargase)*",
     "HCPCS": "J9118"
  },
  {
     "Policy #": "5.21.126",
     "Brand Drug Name": "Herceptin Hylecta",
     "Full Policy": "Herceptin Hylecta (trastuzumab and hyaluronidase-oysk)",
     "HCPCS": "J9356"
  },
  {
     "Policy #": "5.21.127",
     "Brand Drug Name": "Balversa",
     "Full Policy": "Balversa (erdafitinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.128",
     "Brand Drug Name": "Piqray",
     "Full Policy": "Piqray (alpelisib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.129",
     "Brand Drug Name": "Polivy",
     "Full Policy": "Polivy (polatuzumab vedotin-piiq)",
     "HCPCS": "J9309"
  },
  {
     "Policy #": "5.21.130",
     "Brand Drug Name": "Xpovio",
     "Full Policy": "Xpovio (selinexor)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.131",
     "Brand Drug Name": "Nubeqa",
     "Full Policy": "Nubeqa (darolutamide)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.132",
     "Brand Drug Name": "Turalio",
     "Full Policy": "Turalio (pexidartinib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.21.133",
     "Brand Drug Name": "Inrebic",
     "Full Policy": "Inrebic (fedratinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.134",
     "Brand Drug Name": "Rozlytrek",
     "Full Policy": "Rozlytrek (entrectinib)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.21.135",
     "Brand Drug Name": "Oncaspar",
     "Full Policy": "Oncaspar (pegaspargase)",
     "HCPCS": "J9266"
  },
  {
     "Policy #": "5.21.136",
     "Brand Drug Name": "Brukinsa",
     "Full Policy": "Brukinsa (zanubrutinib)",
     "HCPCS": "J8999",
     "Comments for Procedure codes": "Added to PA eff 01/10/2020"
  },
  {
     "Policy #": "5.21.137",
     "Brand Drug Name": "Padcev",
     "Full Policy": "Padcev (enfortumab vedotin-ejfv)",
     "HCPCS": "J9999",
     "Comments for Procedure codes": "Added to PA eff 01/31/2020"
  },
  {
     "Policy #": "5.21.138",
     "Brand Drug Name": "Enhertu",
     "Full Policy": "Enhertu (fam-trastuzumab deruxtecan-nxki)",
     "HCPCS": "J9999",
     "Comments for Procedure codes": "Added to PA eff 01/31/2020"
  },
  {
     "Policy #": "5.21.139",
     "Brand Drug Name": "Ayvakit",
     "Full Policy": "Ayvakit (avapritinib)",
     "HCPCS": "J9999",
     "Comments for Procedure codes": "Added to PA eff 02/21/2020"
  },
  {
     "Policy #": "5.21.140",
     "Brand Drug Name": "Tazverik",
     "Full Policy": "Tazverik (tazemetostat)",
     "HCPCS": "J9999",
     "Comments for Procedure codes": "Added to PA eff 02/28/2020"
  },
  {
     "Policy #": "5.30.01",
     "Brand Drug Name": "Naglazyme ",
     "Full Policy": "Naglazyme (galsulfase)",
     "HCPCS": "J1458"
  },
  {
     "Policy #": "5.30.02",
     "Brand Drug Name": "Assisted Reproductive Technology (ART) Infertility Drugs ",
     "Full Policy": "Bravelle (urofollitropin), Cetrotide (cetrorelix), Clomid / Clomiphene Powder / Serophene (clomiphene citrate), Crinone / Endometrin / First – Progesterone VGS / Progesterone in Oil / Progesterone Powder /Prometrium (progesterone), Follistima AQ (follitropin beta), Gonal-F / Gonal F RFF (follitropin alfa), Ganirelix (ganirelix), Eligard / Lupron Depot (leuprolide), Leuprolide powder, Luveris (lutropin alpha), Menopur /Repronex (menotropins)",
     "HCPCS": "J1950, J3490, J3355, J8499, S0128, S0126, S0132, J9217"
  },
  {
     "Policy #": "5.30.03",
     "Brand Drug Name": "Synarel",
     "Full Policy": "Assisted Reproductive Technology (ART) / Infertility / Synarel (nafarelin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.04",
     "Brand Drug Name": "Carbaglu ",
     "Full Policy": "Carbaglu (carglumic acid)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.05",
     "Brand Drug Name": "Egrifta ",
     "Full Policy": "Egrifta (tesamorelin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.06",
     "Brand Drug Name": "Tocolytics ",
     "Full Policy": "Tocolytics (terbutaline, magnesium sulfate injection)",
     "HCPCS": "J3105"
  },
  {
     "Policy #": "5.30.07",
     "Brand Drug Name": "Increlex ",
     "Full Policy": "Increlex (mecasermin)",
     "HCPCS": "J2170"
  },
  {
     "Policy #": "5.30.08",
     "Brand Drug Name": "Elaprase ",
     "Full Policy": "Elaprase (idursulfase)",
     "HCPCS": "J1743"
  },
  {
     "Policy #": "5.30.09",
     "Brand Drug Name": "Sandostatin LAR",
     "Full Policy": "Sandostatin LAR (octreotide acetate)",
     "HCPCS": "J2353, J2354"
  },
  {
     "Policy #": "5.30.10",
     "Brand Drug Name": "Acthar Gel",
     "Full Policy": "H. P. Acthar Gel (corticotropin; ACTH)",
     "HCPCS": "J0800"
  },
  {
     "Policy #": "5.30.11",
     "Brand Drug Name": "Growth Hormone - Adult ",
     "Full Policy": "Humatrope*, Norditropin*, Genotropin, Nutropin, Nutropin AQ, Omnitrope, Saizen, Zomacton",
     "HCPCS": "J2941"
  },
  {
     "Policy #": "5.30.12",
     "Brand Drug Name": "Growth Hormone - Pediatric",
     "Full Policy": "Humatrope*, Norditropin*, Genotropin, Nutropin, Nutropin AQ, Omnitrope, Saizen, Zomacton (aka. Tev-Tropin)",
     "HCPCS": "J2941"
  },
  {
     "Policy #": "5.30.13",
     "Brand Drug Name": "Rayos",
     "Full Policy": "Rayos (prednisone)",
     "HCPCS": "J7512"
  },
  {
     "Policy #": "5.30.14",
     "Brand Drug Name": "Kuvan ",
     "Full Policy": "Kuvan (sapropterin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.15",
     "Brand Drug Name": "Strensiq",
     "Full Policy": "Strensiq (asfotase alfa)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.17",
     "Brand Drug Name": "Prolia",
     "Full Policy": "Prolia (denosumab)",
     "HCPCS": "J0897"
  },
  {
     "Policy #": "5.30.18",
     "Brand Drug Name": "Xgeva",
     "Full Policy": "Xgeva (denosumab)",
     "HCPCS": "J0897"
  },
  {
     "Policy #": "5.30.19",
     "Brand Drug Name": "SGLT2 Inhibitors",
     "Full Policy": "Invokana (canagliflozin), Invokamet, Invokamet XR (canagliflozin & metformin), Steglatro (ertugliflozin), Steglujan (ertugliflozin & sitagliptin), Segluromet (ertugliflozin & metformin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.20",
     "Brand Drug Name": "Metformin",
     "Full Policy": "Fortamet (extended-release metformin osmotic), Glumetza* (extended-release metformin), Riomet (metformin oral solution), Metformin ER (modified & osmotic",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.21",
     "Brand Drug Name": "Natpara",
     "Full Policy": "Natpara (parathyroid hormone)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.22",
     "Brand Drug Name": "Serostim ",
     "Full Policy": "Serostim (somatropin)",
     "HCPCS": "J2941"
  },
  {
     "Policy #": "5.30.23",
     "Brand Drug Name": "Vimizin",
     "Full Policy": "Vimizim (elosulfase alfa)",
     "HCPCS": "J1322"
  },
  {
     "Policy #": "5.30.24",
     "Brand Drug Name": "Zorbtive ",
     "Full Policy": "Zorbtive (somatropin)",
     "HCPCS": "J2941"
  },
  {
     "Policy #": "5.30.25",
     "Brand Drug Name": "Korlym",
     "Full Policy": "Korlym (mifepristone)",
     "HCPCS": "S0190"
  },
  {
     "Policy #": "5.30.26",
     "Brand Drug Name": "Signifor",
     "Full Policy": "Signifor (pasireotide)",
     "HCPCS": "J2502"
  },
  {
     "Policy #": "5.30.27",
     "Brand Drug Name": "Somatuline Depot",
     "Full Policy": "Somatuline Depot (lanreotide)",
     "HCPCS": "J1930"
  },
  {
     "Policy #": "5.30.29",
     "Brand Drug Name": "Ravicti",
     "Full Policy": "Ravicti (glycerol phenylbutyrate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.30",
     "Brand Drug Name": "Buphenyl",
     "Full Policy": "Buphenyl (sodium phenylbutyrate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.31",
     "Brand Drug Name": "Testosterone Topical",
     "Full Policy": "Androderm patch, AndroGel packets and pump, Axiron solution, First-Testosterone, First-Testosterone MC, Fortesta gel, Testim gel, Vogelxo",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.32",
     "Brand Drug Name": "Testosterone Oral Buccal Nasal",
     "Full Policy": "Android, Androxy, Jatenzo, Methitest, Natesto, Striant, Testred",
     "HCPCS": "J3490, J8499 ",
     "Comments for Procedure codes": "Added to PA eff 01/31/2020"
  },
  {
     "Policy #": "5.30.33",
     "Brand Drug Name": "Testosterone Injection and Implant",
     "Full Policy": "Aveed (testosterone undecanoate injection), Delatestryl (testosterone enanthate injection), Depo-Testosterone (testosterone cypionate injection), Testopel (testosterone propionate implant), Xyosted (testosterone enanthate injection)",
     "HCPCS": "J3145, J3121, J1071, S0189"
  },
  {
     "Policy #": "5.30.34",
     "Brand Drug Name": "Lumizyme ",
     "Full Policy": "Lumizyme (alglucosidase alfa)",
     "HCPCS": "J0221"
  },
  {
     "Policy #": "5.30.35",
     "Brand Drug Name": "Fabrazyme ",
     "Full Policy": "Fabrazyme (agalsidase beta)",
     "HCPCS": "J0180"
  },
  {
     "Policy #": "5.30.36",
     "Brand Drug Name": "Parathyroid Hormone Analogs",
     "Full Policy": "Forteo (teriparatide), Tymlos (abaloparatide)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.30.37",
     "Brand Drug Name": "Testosterone  Powder",
     "Full Policy": "Testosterone (cypionate, enanthate, and propionate) powder, Fluoxymesterone powder, Methyltestosterone powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.38",
     "Brand Drug Name": "Signifor LAR",
     "Full Policy": "Signifor LAR (pasireotide pamoate)",
     "HCPCS": "J2502"
  },
  {
     "Policy #": "5.30.39",
     "Brand Drug Name": "GnRH GD",
     "Full Policy": "Firmagon (degarelix), Supprelin LA (histrelin), Trelstar (triptorelin), Triptodur (triptorelin), Vantas (histrelin), Zoladex (goserelin) ",
     "HCPCS": "J3315, J3316, J9202, J9225, J9226, J1675, J9155"
  },
  {
     "Policy #": "5.30.40",
     "Brand Drug Name": "Kanuma",
     "Full Policy": "Kanuma (sebelipase alfa)",
     "HCPCS": "J2840"
  },
  {
     "Policy #": "5.30.41",
     "Brand Drug Name": "Xuriden",
     "Full Policy": "Xuriden (uridine triacetate)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.42",
     "Brand Drug Name": "Potassium Binders",
     "Full Policy": "Lokelma (sodium zirconium cyclosilicate)*, Veltassa (patiromer) ",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.43",
     "Brand Drug Name": "HCG Powder, Novarel, Pregnyl, Ovidrel",
     "Full Policy": "HCG Powder (human chorionic gonadotropin); Novarel, Pregnyl (chorionic gonadotropin); Ovidrel (choriogonadotropin alfa)",
     "HCPCS": "J0725, J3490",
     "Comments for Procedure codes": "Added to PA eff 03/20/2020"
  },
  {
     "Policy #": "5.30.44",
     "Brand Drug Name": "Aldurazyme (laronidase) ",
     "Full Policy": "Aldurazyme (laronidase)",
     "HCPCS": "J1931"
  },
  {
     "Policy #": "5.30.45",
     "Brand Drug Name": "Myalept",
     "Full Policy": "Myalept (metreleptin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.46",
     "Brand Drug Name": "Sensipar",
     "Full Policy": "Sensipar (cinacalcet)",
     "HCPCS": "J0604"
  },
  {
     "Policy #": "5.30.47",
     "Brand Drug Name": "Parsabiv",
     "Full Policy": "Parsabiv (etelcalcetide)",
     "HCPCS": "J0606"
  },
  {
     "Policy #": "5.30.48",
     "Brand Drug Name": "Insulin GLP-1 Combinations",
     "Full Policy": "Soliqua (insulin glargine and lixisenatide), Xultophy (insulin degludec and liraglutide)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.49",
     "Brand Drug Name": "Brineura",
     "Full Policy": "Brineura (cerliponase alfa)",
     "HCPCS": "J0567"
  },
  {
     "Policy #": "5.30.51",
     "Brand Drug Name": "Mepsevii",
     "Full Policy": "Mepsevii (vestronidase alfa-vjbk)",
     "HCPCS": "J3397"
  },
  {
     "Policy #": "5.30.52",
     "Brand Drug Name": "Crysvita",
     "Full Policy": "Crysvita (burosumab-twza)",
     "HCPCS": "J0584"
  },
  {
     "Policy #": "5.30.53",
     "Brand Drug Name": "Jynarque",
     "Full Policy": "Jynarque (tolvaptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.54",
     "Brand Drug Name": "Samsca",
     "Full Policy": "Samsca (tolvaptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.55",
     "Brand Drug Name": "Palynziq",
     "Full Policy": "Palynziq (pegvaliase-pqpz)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.56",
     "Brand Drug Name": "Orilissa",
     "Full Policy": "Orilissa (elagolix)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.57",
     "Brand Drug Name": "Galafold",
     "Full Policy": "Galafold (migalastat)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.58",
     "Brand Drug Name": "Nocdurna Noctiva",
     "Full Policy": "Nocdurna (desmopressin acetate) sublingual tablets, Noctiva (desmopressin acetate) nasal spray",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.59",
     "Brand Drug Name": "SGLT2 Step Policy",
     "Full Policy": "Farxiga (dapagliflozin), Qtern (dapagliflozin & saxagliptin), Xigduo XR(dapagliflozin & metformin) Jardiance (empagliflozin),  Glyxambi (empagliflozin & linagliptin), Synjardy, Synjardy XR (empagliflozin & metformin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.60",
     "Brand Drug Name": "Revcovi",
     "Full Policy": "Revcovi (elapegademase-lvlr)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.30.61",
     "Brand Drug Name": "Gamifant",
     "Full Policy": "Gamifant (emapalumab-lzsg)",
     "HCPCS": "J9210",
     "Comments for Procedure codes": "Medical only benefit as of 01/01/2020"
  },
  {
     "Policy #": "5.30.62",
     "Brand Drug Name": "Anabolic Steroids",
     "Full Policy": "Anadrol-50 (oxymetholone), Oxandrin (oxandrolone)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.30.63",
     "Brand Drug Name": "Evenity",
     "Full Policy": "Evenity (romosozumab-aqqg)",
     "HCPCS": "J3111"
  },
  {
     "Policy #": "5.40.01",
     "Brand Drug Name": "Juxtapid",
     "Full Policy": "Juxtapid (lomitapide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.03",
     "Brand Drug Name": "Alprostadil",
     "Full Policy": "Alprostadil (prostaglandin E1)",
     "HCPCS": "J0270"
  },
  {
     "Policy #": "5.40.04",
     "Brand Drug Name": "Northera",
     "Full Policy": "Northera (droxidopa)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.05",
     "Brand Drug Name": "Corlanor",
     "Full Policy": "Corlanor (ivabradine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.06",
     "Brand Drug Name": "Praluent",
     "Full Policy": "Praluent (alirocumab)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.07",
     "Brand Drug Name": "Entresto",
     "Full Policy": "Entresto (sacubitril / valsartan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.08",
     "Brand Drug Name": "Repatha",
     "Full Policy": "Repatha (evolocumab)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.40.09",
     "Brand Drug Name": "Keveyis",
     "Full Policy": "Keveyis (dichlorphenamide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.10",
     "Brand Drug Name": "Uptravi",
     "Full Policy": "Uptravi (selexipag)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.11",
     "Brand Drug Name": "Revatio ",
     "Full Policy": "Revatio (sildenafil)",
     "HCPCS": "S0090"
  },
  {
     "Policy #": "5.40.12",
     "Brand Drug Name": "Ventavis ",
     "Full Policy": "Ventavis (iloprost)",
     "HCPCS": "J4074"
  },
  {
     "Policy #": "5.40.13",
     "Brand Drug Name": "Tyvaso  ",
     "Full Policy": "Tyvaso (treprostinil)",
     "HCPCS": "J7686"
  },
  {
     "Policy #": "5.40.14",
     "Brand Drug Name": "Adcirca Alyq",
     "Full Policy": "Adcirca Alyq (tadalafil)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.15",
     "Brand Drug Name": "Flolan; Veletri ",
     "Full Policy": "Flolan; Veletri (epoprostenol)",
     "HCPCS": "J1325"
  },
  {
     "Policy #": "5.40.16",
     "Brand Drug Name": "Letairis ",
     "Full Policy": "Letairis (ambrisentan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.17",
     "Brand Drug Name": "Remodulin ",
     "Full Policy": "Remodulin (treprostinil)",
     "HCPCS": "J3285"
  },
  {
     "Policy #": "5.40.18",
     "Brand Drug Name": "Tracleer ",
     "Full Policy": "Tracleer (bosentan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.19",
     "Brand Drug Name": "Adempas",
     "Full Policy": "Adempas (riociguat)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.20",
     "Brand Drug Name": "Opsumit",
     "Full Policy": "Opsumit (macitentan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.21",
     "Brand Drug Name": "Orenitram",
     "Full Policy": "Orenitram (treprostinil)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.22",
     "Brand Drug Name": "Cialis ",
     "Full Policy": "Cialis (tadalafil)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.23",
     "Brand Drug Name": "Sildenafil powder, Tadalafil powder",
     "Full Policy": "Sildenafil powder, Tadalafil powder",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.40.24",
     "Brand Drug Name": "Phentolamine Powder",
     "Full Policy": "Phentolamine Powder",
     "HCPCS": "J2760"
  },
  {
     "Policy #": "5.40.25",
     "Brand Drug Name": "Papaverine Powder",
     "Full Policy": "Papaverine Powder",
     "HCPCS": "J2440"
  },
  {
     "Policy #": "5.40.26",
     "Brand Drug Name": "Cholestyramine Powder",
     "Full Policy": "Cholestyramine Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.45.01",
     "Brand Drug Name": "Pulmozyme ",
     "Full Policy": "Pulmozyme (dornase alfa)",
     "HCPCS": "J7639"
  },
  {
     "Policy #": "5.45.02",
     "Brand Drug Name": "Xolair ",
     "Full Policy": "Xolair (omalizumab)",
     "HCPCS": "J2357"
  },
  {
     "Policy #": "5.45.03",
     "Brand Drug Name": "Kalydeco",
     "Full Policy": "Kalydeco (ivacaftor)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.45.04",
     "Brand Drug Name": "Esbriet",
     "Full Policy": "Esbriet (pirfenidone)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.45.05",
     "Brand Drug Name": "Ofev",
     "Full Policy": "Ofev (nintedanib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.45.06",
     "Brand Drug Name": "Orkambi",
     "Full Policy": "Orkambi (lumacaftor/ivacaftor)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.45.07",
     "Brand Drug Name": "IL-5 Antagonists (IgG1 kappa)",
     "Full Policy": "Fasenra (benralizumab) Nucala (mepolizumab)",
     "HCPCS": "J0517, J2182"
  },
  {
     "Policy #": "5.45.08",
     "Brand Drug Name": "Cinqair",
     "Full Policy": "Cinqair (reslizumab)",
     "HCPCS": "J2786"
  },
  {
     "Policy #": "5.45.09",
     "Brand Drug Name": "Alpha1-Proteinase Inhibitors",
     "Full Policy": "Aralast NP, Glassia, Prolastin-C, Zemaira",
     "HCPCS": "J0256, J0257"
  },
  {
     "Policy #": "5.45.10",
     "Brand Drug Name": "Symdeko",
     "Full Policy": "Symdeko (tezacaftor and ivacaftor)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.45.11",
     "Brand Drug Name": "Sinus Implants",
     "Full Policy": "Propel, Sinuva (mometasone furoate)",
     "HCPCS": "J7401"
  },
  {
     "Policy #": "5.45.12",
     "Brand Drug Name": "Trikafta",
     "Full Policy": "Trikafta (elexacaftor/tezacaftor/ivacaftor)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.01",
     "Brand Drug Name": "Proton Pump Inhibitors",
     "Full Policy": "Aciphex (rabeprazole), Dexilant (dexlansoprazole), Esomeprazole Strontium, Nexium (esomeprazole), Prevacid (lansoprazole), Prilosec (omeprazole), Protonix (pantoprazole), First-Lansoprazole suspension, Zegerid (omeprazole / sodium bicarbonate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.02",
     "Brand Drug Name": "Remicade ",
     "Full Policy": "Remicade (infliximab)",
     "HCPCS": "J1745, Q5103, Q5104, Q5109"
  },
  {
     "Policy #": "5.50.03",
     "Brand Drug Name": "Gattex",
     "Full Policy": "Gattex (teduglutide)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.50.05",
     "Brand Drug Name": "NK1 Antagonists",
     "Full Policy": "Cinvanti, Emend (aprepitant), Emend injection (fosaprepitant), Akynzeo (netupitant and palonosetron), Varubi (rolapitant) ",
     "HCPCS": "J0185, J1453, J1454, J2797, J8501, J8655, J8670, J3490, "
  },
  {
     "Policy #": "5.50.06",
     "Brand Drug Name": "Opioid Antagonist Drug Class",
     "Full Policy": "Movantik (naloxegol), Relistor (methylnaltrexone bromide), Symproic (naldemedine)",
     "HCPCS": "J8499, J2212"
  },
  {
     "Policy #": "5.50.07",
     "Brand Drug Name": "Viberzi",
     "Full Policy": "Viberzi (eluxadoline)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.09",
     "Brand Drug Name": "Cholbam",
     "Full Policy": "Cholbam (cholic acid)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.10",
     "Brand Drug Name": "Ocaliva",
     "Full Policy": "Ocaliva (obeticholic acid)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.11",
     "Brand Drug Name": "Cimzia",
     "Full Policy": "Cimzia (certolizumab pegol)",
     "HCPCS": "J0717"
  },
  {
     "Policy #": "5.50.12",
     "Brand Drug Name": "Entyvio",
     "Full Policy": "Entyvio (vedolizumab)",
     "HCPCS": "J3380"
  },
  {
     "Policy #": "5.50.13",
     "Brand Drug Name": "Trulance",
     "Full Policy": "Trulance (plecanatide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.14",
     "Brand Drug Name": "Xermelo",
     "Full Policy": "Xermelo (telotristat ethyl)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.15",
     "Brand Drug Name": "5HT-3 Antagonists",
     "Full Policy": "Aloxi injection (palonosetron), Anzemet tablets (dolasetron), Granisetron injection, Kytril tablets, Sancuso patch, Sustol injection (granisetron), Zuplenz oral film (ondansetron) ",
     "HCPCS": "J1626, J1627, J2469, Q0162, J3490",
     "Comments for Procedure codes": "Removed J2405 (Zofran injection)"
  },
  {
     "Policy #": "5.50.16",
     "Brand Drug Name": "Doxylamine Pyridoxine",
     "Full Policy": "Bonjesta, Diclegis (doxylamine-pyridoxine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.17",
     "Brand Drug Name": "Cannabinoids",
     "Full Policy": "Cesamet (nabilone), Marinol (dronabinol) capsules, Syndros (dronabinol) oral solution ",
     "HCPCS": "J8650, Q0167, J3490"
  },
  {
     "Policy #": "5.50.21",
     "Brand Drug Name": "PrevPac and Omeclamox",
     "Full Policy": "Prevpac (lansoprazole, clarithromycin, and amoxicillin) Pylera (bismuth subcitrate, metronidazole, tetracycline) Omeclamox-Pak (omeprazole, clarithromycin, and amoxicillin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.22",
     "Brand Drug Name": "Amitiza",
     "Full Policy": "Amitiza (lubiprostone)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.23",
     "Brand Drug Name": "Linzess",
     "Full Policy": "Linzess (linaclotide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.24",
     "Brand Drug Name": "Motegrity",
     "Full Policy": "Motegrity (prucalopride)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.50.25",
     "Brand Drug Name": "Zelnorm",
     "Full Policy": "Zelnorm (tegaserod)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.55.01",
     "Brand Drug Name": "Procysbi",
     "Full Policy": "Procysbi (cysteamine bitartrate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.01",
     "Brand Drug Name": "Tecfidera Vumerity",
     "Full Policy": "Tecfidera (dimethyl fumarate), Vumerity (diroximel fumarate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.02",
     "Brand Drug Name": "Ampyra",
     "Full Policy": "Ampyra (dalfampridine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.03",
     "Brand Drug Name": "Nuplazid",
     "Full Policy": "Nuplazid (pimavanserin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.04",
     "Brand Drug Name": "MS Injectable Drugs",
     "Full Policy": "Avonex, Rebif (interferon beta-1a); Plegridy (peginterferon beta-1a); Betaseron, Extavia (interferon beta-1b); Copaxone, Glatopa (glatiramer)",
     "HCPCS": "J1826, Q3027, Q3028, J1595"
  },
  {
     "Policy #": "5.60.05",
     "Brand Drug Name": "Xyrem",
     "Full Policy": "Xyrem (sodium oxybate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.06",
     "Brand Drug Name": "Belsomra",
     "Full Policy": "Belsomra (suvorexant)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.07",
     "Brand Drug Name": "Rozerem",
     "Full Policy": "Rozerem (ramelteon)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.60.08",
     "Brand Drug Name": "Gilenya ",
     "Full Policy": "Gilenya (fingolimod)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.09",
     "Brand Drug Name": "Aubagio ",
     "Full Policy": "Aubagio (teriflunomide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.10",
     "Brand Drug Name": "Hetlioz",
     "Full Policy": "Hetlioz (tasimelteon)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.11",
     "Brand Drug Name": "Sedative Hypnotics ",
     "Full Policy": "Ambien (zolpidem), Ambien CR (zolpidem extended-release), Edluar (zolpidem sublingual), Dalmane (flurazepam), Halcion (triazolam), Intermezzo (zolpidem sublingual) Lunesta (eszopiclone), Prosom (estazolam), Restoril (temazepam), Sonata (zaleplon), Zolpimist (zolpidem) Oral Spray",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.12",
     "Brand Drug Name": "Xenazine ",
     "Full Policy": "Xenazine (tetrabenazine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.13",
     "Brand Drug Name": "Tysabri",
     "Full Policy": "Tysabri (natalizumab)",
     "HCPCS": "J2323"
  },
  {
     "Policy #": "5.60.14",
     "Brand Drug Name": "Provigil Nuvigil ",
     "Full Policy": "Provigil (modafinil) / Nuvigil (armodafinil)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.15",
     "Brand Drug Name": "Austedo",
     "Full Policy": "Austedo (deutetrabenazine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.23",
     "Brand Drug Name": "Lemtrada",
     "Full Policy": "Lemtrada (alemtuzumab)",
     "HCPCS": "J0202"
  },
  {
     "Policy #": "5.60.24",
     "Brand Drug Name": "Amphetamines ",
     "Full Policy": "Adderall , Adderall XR (mixed salts of a single entity amphetamine) /Desoxyn (methamphetamine) / Dexedrine, Procentra, Zenzedi (dextroamphetamine), Adzenys XR–ODT, Evekeo, Evekeo ODT, Mydayis (amphetamine sulfate) / Vyvanse (lisdexamfetamine) / Dyanaval XR (amphetamine suspension)",
     "HCPCS": "J8499, S0160"
  },
  {
     "Policy #": "5.60.25",
     "Brand Drug Name": "Methylphenidate Dexmethylphenidate",
     "Full Policy": "Concerta / Daytrana / Metadate CD / Metadate ER / Methylin / Methylin-ER / Quillivant XR / Ritalin / Ritalin LA / Ritalin-SR and Focalin/ Focalin XR (Methylphenidate and Dexmethylphenidate)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.60.26",
     "Brand Drug Name": "Zyprexa Relprevv",
     "Full Policy": "Zyprexa Relprevv (olanzapine)",
     "HCPCS": "J2358"
  },
  {
     "Policy #": "5.60.27",
     "Brand Drug Name": "Nuedexta",
     "Full Policy": "Nuedexta (dextromethorphan hydrobromide/quinidine sulfate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.28",
     "Brand Drug Name": "Ocrevus",
     "Full Policy": "Ocrevus (ocrelizumab)",
     "HCPCS": "J2350"
  },
  {
     "Policy #": "5.60.29",
     "Brand Drug Name": "Ingrezza",
     "Full Policy": "Ingrezza (valbenazine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.30",
     "Brand Drug Name": "Lucemyra",
     "Full Policy": "Lucemyra (lofexidine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.31",
     "Brand Drug Name": "Inbrija",
     "Full Policy": "Inbrija (levodopa inhalation powder)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.33",
     "Brand Drug Name": "Spravato",
     "Full Policy": "Spravato (esketamine nasal spray)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.60.34",
     "Brand Drug Name": "Mayzent",
     "Full Policy": "Mayzent (siponimod)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.35",
     "Brand Drug Name": "Mavenclad",
     "Full Policy": "Mavenclad (cladribine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.36",
     "Brand Drug Name": "Sunosi",
     "Full Policy": "Sunosi (solriamfetol)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "Added to PA eff 01/10/2020"
  },
  {
     "Policy #": "5.60.37",
     "Brand Drug Name": "Zulresso",
     "Full Policy": "Zulresso (brexanolone)",
     "HCPCS": "C9055",
     "Comments for Procedure codes": "New code eff 01/01/2020"
  },
  {
     "Policy #": "5.60.38",
     "Brand Drug Name": "Wakix",
     "Full Policy": "Wakix (pitolisant)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "Added to PA eff 02/07/2020"
  },
  {
     "Policy #": "5.60.39",
     "Brand Drug Name": "Nourianz",
     "Full Policy": "Nourianz (istradefylline)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.60.40",
     "Brand Drug Name": "Abilify Mycite",
     "Full Policy": "Abilify Mycite (aripiprazole tablets with sensor)",
     "HCPCS": "J3490",
     "Comments for Procedure codes": "Added to PA eff 01/10/2020"
  },
  {
     "Policy #": "5.60.41",
     "Brand Drug Name": "Nayzilam",
     "Full Policy": "Nayzilam (midazolam nasal spray)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.60.42",
     "Brand Drug Name": "Tasmar",
     "Full Policy": "Tasmar* (tolcapone)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "Added to PA eff 01/31/2020"
  },
  {
     "Policy #": "5.70.01",
     "Brand Drug Name": "Abstral (fentanyl) ",
     "Full Policy": "Abstral (fentanyl sublingual tablets)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.02",
     "Brand Drug Name": "Actiq (fentanyl) ",
     "Full Policy": "Actiq (oral transmucosal fentanyl citrate)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.03",
     "Brand Drug Name": "Amerge ",
     "Full Policy": "Amerge (naratriptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.04",
     "Brand Drug Name": "Arcalyst ",
     "Full Policy": "Arcalyst (rilonacept)",
     "HCPCS": "J2793"
  },
  {
     "Policy #": "5.70.05",
     "Brand Drug Name": "Axert ",
     "Full Policy": "Axert (almotriptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.06",
     "Brand Drug Name": "Celebrex (celecoxib) ",
     "Full Policy": "Celebrex (celecoxib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.07",
     "Brand Drug Name": "Fentora (fentanyl) ",
     "Full Policy": "Fentora (fentanyl buccal tablet)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.08",
     "Brand Drug Name": "Frova ",
     "Full Policy": "Frova (frovatriptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.09",
     "Brand Drug Name": "Ilaris ",
     "Full Policy": "Ilaris (canakinumab)",
     "HCPCS": "J0638"
  },
  {
     "Policy #": "5.70.10",
     "Brand Drug Name": "Sumatriptan Imitrex Treximet",
     "Full Policy": "Sumatriptan Tablets, Nasal Spray (Imitrex) and Nasal Powder (Onzetra Xsail) / sumatriptan and naproxen sodium (Treximet tablets)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.11",
     "Brand Drug Name": "Sumatriptan Injection ",
     "Full Policy": "Sumatriptan Injection (Imitrex / Alsuma / Sumavel / Zembrace)",
     "HCPCS": "J3030, J3490"
  },
  {
     "Policy #": "5.70.12",
     "Brand Drug Name": "Actemra",
     "Full Policy": "Actemra (tocilizumab)",
     "HCPCS": "J3262"
  },
  {
     "Policy #": "5.70.13",
     "Brand Drug Name": "Ketalar ",
     "Full Policy": "Ketalar (ketamine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.14",
     "Brand Drug Name": "Krystexxa ",
     "Full Policy": "Krystexxa (pegloticase)",
     "HCPCS": "J2507"
  },
  {
     "Policy #": "5.70.15",
     "Brand Drug Name": "Lazanda (fentanyl) ",
     "Full Policy": "Lazanda (Fentanyl intranasal spray)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.16",
     "Brand Drug Name": "Maxalt",
     "Full Policy": "Maxalt / Maxalt-MLT (rizatriptan)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.18",
     "Brand Drug Name": "Orencia ",
     "Full Policy": "Orencia (abatacept)",
     "HCPCS": "J0129"
  },
  {
     "Policy #": "5.70.19",
     "Brand Drug Name": "Relpax ",
     "Full Policy": "Relpax (eletriptan hydrobromide)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.20",
     "Brand Drug Name": "Butorphanol ",
     "Full Policy": "Butorphanol (Stadol)",
     "HCPCS": "J0595, S0012"
  },
  {
     "Policy #": "5.70.21",
     "Brand Drug Name": "Subsys (fentanyl) ",
     "Full Policy": "Subsys (fentanyl sublingual spray)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.22",
     "Brand Drug Name": "Zomig",
     "Full Policy": "Zomig / Zomig-ZMT (zolmitriptan)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.23",
     "Brand Drug Name": "Migraine Powders",
     "Full Policy": "Sumatriptan powder, Zolmitriptan powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.24",
     "Brand Drug Name": "Xeljanz ",
     "Full Policy": "Xeljanz (tofacitinib)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.70.26",
     "Brand Drug Name": "Anti-Inflammatory Pain Powders",
     "Full Policy": "Celecoxib Powder, Diclofenac Powder, Fenoprofen Powder, Flurbiprofen Powder, Ibuprofen Powder, Ketoprofen Powder, Meloxicam Powder, Naproxen Powder, Tramadol Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.27",
     "Brand Drug Name": "Enbrel",
     "Full Policy": "Enbrel (etanercept)",
     "HCPCS": "J1438"
  },
  {
     "Policy #": "5.70.28",
     "Brand Drug Name": "Ketamine Powder",
     "Full Policy": "Ketamine Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.29",
     "Brand Drug Name": "Humira",
     "Full Policy": "Humira (adalimumab), Amjevita* (adalimumab- atto), Cyltezo* (adalimumab-adbm), Hyrimoz* (adalimumab-adaz)",
     "HCPCS": "J0135",
     "Comments for Procedure codes": "Drugs with * are not yet on the Market"
  },
  {
     "Policy #": "5.70.31",
     "Brand Drug Name": "Duragesic Patch",
     "Full Policy": "Duragesic Patch (fentanyl patch)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.32",
     "Brand Drug Name": "Suboxone Drug Class",
     "Full Policy": "Suboxone, Zubsolv, Bunavail, Buprenorphine sublingual tablets, Probuphine, Sublocade buprenorphine, buprenorphine with naloxone",
     "HCPCS": "J0570, J0571, J0572, J0573, J0574, J0575, J0592",
     "Comments for Procedure codes": "(Note: Drugs will not stop for PA in C07)"
  },
  {
     "Policy #": "5.70.37",
     "Brand Drug Name": "Methotrexate Injections",
     "Full Policy": "Otrexup, Rasuvo (methotrexate)",
     "HCPCS": "J9250, J9260"
  },
  {
     "Policy #": "5.70.41",
     "Brand Drug Name": "Methadone",
     "Full Policy": "Dolophine (methadone oral tablets), Methadone Hydrochloride Intensol (methadone oral concentrate), Methadose Oral Concentrate (methadone oral concentrate), Methadose Oral Tablet (methadone oral tablets), Methadose Dispersible Tablets (tablets for oral suspension)",
     "HCPCS": "J1230, J8499"
  },
  {
     "Policy #": "5.70.42",
     "Brand Drug Name": "Duexis (ibuprofen famotidine)",
     "Full Policy": "Duexis (ibuprofen and famotidine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.43",
     "Brand Drug Name": "Butrans (buprenorphine patch)",
     "Full Policy": "Butrans (buprenorphine patch)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.44",
     "Brand Drug Name": "Targiniq ER (oxycodone /naloxone)",
     "Full Policy": "Targiniq ER (oxycodone /naloxone extended-release)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.45",
     "Brand Drug Name": "Sprix (ketorolac)",
     "Full Policy": "Sprix Nasal Spray (ketorolac kromethamine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.46",
     "Brand Drug Name": "Zecuity (sumatriptan transdermal)",
     "Full Policy": "Zecuity (sumatriptan iontophoretic transdermal system)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "This is a patch and not the injection J3030"
  },
  {
     "Policy #": "5.70.48",
     "Brand Drug Name": "Zurampic",
     "Full Policy": "Zurampic (lesinurad)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.49",
     "Brand Drug Name": "Anesthetic Powders",
     "Full Policy": "Lidocaine Powder, Prilocaine Powder ",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.50",
     "Brand Drug Name": "Kineret",
     "Full Policy": "Kineret (anakinra)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.51",
     "Brand Drug Name": "Simponi / Simponi ARIA",
     "Full Policy": "Simponi / Simponi ARIA (golimumab)",
     "HCPCS": "J1602"
  },
  {
     "Policy #": "5.70.53",
     "Brand Drug Name": "Otezla",
     "Full Policy": "Otezla (apremilast)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.70.54",
     "Brand Drug Name": "Lidocaine",
     "Full Policy": "Lidocaine (lidocaine injection)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.55",
     "Brand Drug Name": "Opioid Step Policy",
     "Full Policy": "Suboxone, Zubsolv, Bunavail, Probuphine and buprenorphine sublingual tablets and Naloxone. Methadone hydrochloride",
     "HCPCS": "J0570, J0571, J0572, J0573, J0574, J0575, J1230, J8499",
     "Comments for Procedure codes": "(Note: Drugs will not stop for PA in C07)"
  },
  {
     "Policy #": "5.70.57",
     "Brand Drug Name": "Fentanyl Powder",
     "Full Policy": "Fentanyl Powder (fentanyl Citrate)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.58",
     "Brand Drug Name": "Butalbital Analgesics",
     "Full Policy": "Allzital (butalbital-acetaminophen), butalbital-aspirin-caffeine, butalbital-aspirin-caffeine-codeine, butalbital-acetaminophen, butalbital-acetaminophen-caffeine, butalbital-acetaminophen-caffeine-codeine, Vanatol LQ (butalbital-acetaminophen-caffeine liquid oral solution)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.60",
     "Brand Drug Name": "Migranal",
     "Full Policy": "Migranal Nasal Spray (dihydroergotamine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.61",
     "Brand Drug Name": "Extended Release Opioid Drugs",
     "Full Policy": "Belbuca (buprenorphine), Hysingla ER, Zohydro ER (hydrocodone ER), Exalgo (hydromorphone ER), Arymo ER, Avinza, Kadian, MorphaBond, MS Contin (morphine sulfate ER), Embeda (morphine sulfate/naltrexone ER), OxyContin, Xtampza ER (oxycodone ER), Opana ER (oxymorphone ER) Nucynta ER (tapentadol ER), Conzip, Ultram ER (tramadol ER)",
     "HCPCS": "J2410, J3490, J8499, Q9991, Q9992",
     "Comments for Procedure codes": "J1170, J2274 have been removed from PA"
  },
  {
     "Policy #": "5.70.62",
     "Brand Drug Name": "Kevzara",
     "Full Policy": "Kevzara (sarilumab)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.63",
     "Brand Drug Name": "Duzallo",
     "Full Policy": "Duzallo (lesinurad and allopurinol)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.64",
     "Brand Drug Name": "Opioid Powders",
     "Full Policy": "Buprenorphine Powder, Butorphanol Powder, Codeine Powder, Hydrocodone Powder, Hydromorphone Powder, Levorphanol Powder, Meperidine Powder, Methadone Powder, Morphine Powder, Oxycodone Powder, Oxymorphone Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.65",
     "Brand Drug Name": "Zilretta",
     "Full Policy": "Zilretta (triamcinolone injectable suspension)",
     "HCPCS": "J3304"
  },
  {
     "Policy #": "5.70.66",
     "Brand Drug Name": "Opioid Cough Medications",
     "Full Policy": "Codeine with phenylephrine and promethazine, Codeine with promethazine, FlowTuss (hydrocodone bitartrate, guaifenesin), Hycofenix (hydrocodone bitartrate, pseudoephedrine, guaifenesin), Hydromet (hydrocodone bitartrate, homatropine), Obredon (hydrocodone bitartrate, guaifenesin),  TussiCaps (hydrocodone polistirex, chlorphineramine polistirex), Tussigon (hydrocodone bitartrate, homatropine), Tussionex Pennkinetic (hydrocodone bitartrate, chlorpheniramine), Tuzistra XR (codeine, chlorpheniramine), Zutripro (hydrocodone bitartrate, pseudoephedrine, chlorpheniramine),Tuxarin ER (codeine, chlorpheniramine )",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.67",
     "Brand Drug Name": "IR Opioid Combo Drugs",
     "Full Policy": "Apadaz (benzhydrocodone-acetaminophen), Codeine-acetaminophen, Dihydrocodeine-caffeine-acetaminophen, Hydrocodone-acetaminophen, Hydrocodone-ibuprofen, Nalocet* (oxycodone-acetaminophen), Oxycodone-acetaminophen, Oxycodone-aspirin, Oxycodone-ibuprofen, Tramadol-acetaminophen",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.70.68",
     "Brand Drug Name": "Migraine CGRP Antagonists",
     "Full Policy": "Aimovig (erenumab-aooe) injection, Ajovy* (fremanezumab-vfrm) injection, Emgality (galcanezumab-gnim)",
     "HCPCS": "J3490, J3590, J3031, C9040"
  },
  {
     "Policy #": "5.70.69",
     "Brand Drug Name": "Olumiant",
     "Full Policy": "Olumiant (baricitinib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.70",
     "Brand Drug Name": "Immediate Release Opioid Drugs",
     "Full Policy": "Codeine, Demerol (meperidine), Dilaudid IR (hydromorphone IR), Levorphanol, Morphine IR, Nucynta IR (tapentadol IR), Opana IR (oxymorphone IR), Oxycodone IR, Pentazocine-Naloxone, Ultram (tramadol IR) ",
     "HCPCS": "J3490, J1960, J2175, J2410",
     "Comments for Procedure codes": "J1170 has beem removed from PA"
  },
  {
     "Policy #": "5.70.71",
     "Brand Drug Name": "Uloric",
     "Full Policy": "Uloric (febuxostat)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.73",
     "Brand Drug Name": "Dsuvia",
     "Full Policy": "Dsuvia (sufentanil sublingual tablet)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.70.74",
     "Brand Drug Name": "Rinvoq",
     "Full Policy": "Rinvoq (upadacitinib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.75.01",
     "Brand Drug Name": "Botox ",
     "Full Policy": "Botox (onabotulinum toxin A)",
     "HCPCS": "J0585"
  },
  {
     "Policy #": "5.75.02",
     "Brand Drug Name": "Dysport ",
     "Full Policy": "Dysport (abobotulinum toxin A)",
     "HCPCS": "J0586"
  },
  {
     "Policy #": "5.75.03",
     "Brand Drug Name": "Myobloc ",
     "Full Policy": "Myobloc (rimabotulinumtoxin B)",
     "HCPCS": "J0587"
  },
  {
     "Policy #": "5.75.04",
     "Brand Drug Name": "Xeomin ",
     "Full Policy": "Xeomin (incobotulinumtoxinA)",
     "HCPCS": "J0588"
  },
  {
     "Policy #": "5.75.05",
     "Brand Drug Name": "Sabril Vigadrone",
     "Full Policy": "Sabril (vigabatrin), Vigadrone (vigabatrin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.06",
     "Brand Drug Name": "Topiramate Powder",
     "Full Policy": "Topiramate powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.07",
     "Brand Drug Name": "Soma",
     "Full Policy": "Soma (carisoprodol), Soma Compound (carisoprodol and aspirin), Soma Compound w/ Codeine (carisoprodol and aspirin and codeine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.75.08",
     "Brand Drug Name": "Cyclobenzaprine Powder",
     "Full Policy": "Cyclobenzaprine Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.09",
     "Brand Drug Name": "Hyaluronic Acid Derivatives ",
     "Full Policy": "Euflexxa, Gel-ONE, Gel-Syn 3, Hymovis, Hyalgan, Monovisc, Orthovisc, Supartz, Synvisc, Synvisc-ONE, Durolane, Visco-3, Trivisk, Synojoynt, Triluron",
     "HCPCS": "J7318, J7320, J7321, J7322,  J7323, J7324, J7325, J7326, J7327, J7328, J7329, J7331, J7332"
  },
  {
     "Policy #": "5.75.10",
     "Brand Drug Name": "Hyaluronate",
     "Full Policy": "Hyaluronate Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.11",
     "Brand Drug Name": "Baclofen Powder",
     "Full Policy": "Baclofen Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.12",
     "Brand Drug Name": "Tizanidine Powder",
     "Full Policy": "Tizanidine powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.13",
     "Brand Drug Name": "Gabapentin Powder",
     "Full Policy": "Gabapentin Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.14",
     "Brand Drug Name": "Exondys 51",
     "Full Policy": "Exondys 51 (eteplirsen)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.15",
     "Brand Drug Name": "Spinraza",
     "Full Policy": "Spinraza (nusinersen)",
     "HCPCS": "J2326"
  },
  {
     "Policy #": "5.75.16",
     "Brand Drug Name": "Emflaza",
     "Full Policy": "Emflaza (deflazacort)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.17",
     "Brand Drug Name": "Gabapentin",
     "Full Policy": "Gabapentin (Gralise, Horizant, Neurontin)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.18",
     "Brand Drug Name": "Lyrica",
     "Full Policy": "Lyrica, Lyrica CR (pregabalin) ",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.19",
     "Brand Drug Name": "Savella",
     "Full Policy": "Savella (milnacipran)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.75.20",
     "Brand Drug Name": "Radicava",
     "Full Policy": "Radicava (edaravone)",
     "HCPCS": "J1301"
  },
  {
     "Policy #": "5.75.21",
     "Brand Drug Name": "Amantadine Extended-Release",
     "Full Policy": "Gocovri, Osmolex ER ",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.75.22",
     "Brand Drug Name": "Epidiolex",
     "Full Policy": "Epidiolex (cannabidiol)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.23",
     "Brand Drug Name": "Onpattro",
     "Full Policy": "Onpattro (patisiran)",
     "HCPCS": "J0222",
     "Comments for Procedure codes": "Medical only benefit"
  },
  {
     "Policy #": "5.75.25",
     "Brand Drug Name": "Tegsedi",
     "Full Policy": "Tegsedi (inotersen)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.26",
     "Brand Drug Name": "Firdapse Ruzurgi",
     "Full Policy": "Firdapse, Ruzurgi (amifampridine)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.75.28",
     "Brand Drug Name": "Vyndaqel",
     "Full Policy": "Vyndaqel (tafamidis meglumine), Vyndamax* (tafamidis)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "*not yet on market"
  },
  {
     "Policy #": "5.75.29",
     "Brand Drug Name": "Ozobax Solution",
     "Full Policy": "Ozobax (baclofen) solution",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.75.31",
     "Brand Drug Name": "Vyondys 53",
     "Full Policy": "Vyondys 53 (golodirsen)",
     "HCPCS": "J3490",
     "Comments for Procedure codes": "Added to PA eff 03/13/2020"
  },
  {
     "Policy #": "5.80.01",
     "Brand Drug Name": "Medical Foods",
     "Full Policy": "Medical Foods",
     "HCPCS": "N/A",
     "Comments for Procedure codes": "Pharmacy only benefit"
  },
  {
     "Policy #": "5.85.01",
     "Brand Drug Name": "Aranesp ",
     "Full Policy": "Aranesp (darbepoetin alfa)",
     "HCPCS": "J0881, J0882"
  },
  {
     "Policy #": "5.85.02",
     "Brand Drug Name": "Berinert ",
     "Full Policy": "Berinert (C1 esterase inhibitor [human])",
     "HCPCS": "J0597"
  },
  {
     "Policy #": "5.85.03",
     "Brand Drug Name": "Ceprotin ",
     "Full Policy": "Ceprotin (protein C)",
     "HCPCS": "J2724"
  },
  {
     "Policy #": "5.85.04",
     "Brand Drug Name": "Cerezyme ",
     "Full Policy": "Cerezyme (imiglucerase)",
     "HCPCS": "J1786"
  },
  {
     "Policy #": "5.85.05",
     "Brand Drug Name": "Cinryze ",
     "Full Policy": "Cinryze (C1 esterase inhibitor [human])",
     "HCPCS": "J0598"
  },
  {
     "Policy #": "5.85.06",
     "Brand Drug Name": "Epogen Procrit ",
     "Full Policy": "Epogen, Procrit (epoetin alfa), Retacrit (epoetin alfa – epbx) ",
     "HCPCS": "Q4081, J0885, Q5105, Q5106"
  },
  {
     "Policy #": "5.85.07",
     "Brand Drug Name": "Kalbitor ",
     "Full Policy": "Kalbitor (ecallantide)",
     "HCPCS": "J1290"
  },
  {
     "Policy #": "5.85.08",
     "Brand Drug Name": "Leukine ",
     "Full Policy": "Leukine (sargramostim)",
     "HCPCS": "J2820"
  },
  {
     "Policy #": "5.85.09",
     "Brand Drug Name": "Neulasta",
     "Full Policy": "Neulasta (pegfilgrastim), Fulphila (pegfilgrastim-jmdb), Udenyca (biosimilar), Pegfilgrastim-bmez, biosimilar, (ziextenzo) ",
     "HCPCS": "C9058, J2505, Q5108, Q5111",
     "Comments for Procedure codes": "New code eff 04/01/2020"
  },
  {
     "Policy #": "5.85.10",
     "Brand Drug Name": "Neupogen Granix Nivestym Zarxio",
     "Full Policy": "Neupogen (filgrastim), Granix (tbo-filgrastim), Nivestym (filgrastim-aafi), Zarxio (filgrastim-sndz) ",
     "HCPCS": "J1442, J1447, Q5110",
     "Comments for Procedure codes": "Q5101 has been removed from PA"
  },
  {
     "Policy #": "5.85.11",
     "Brand Drug Name": "Soliris ",
     "Full Policy": "Soliris (eculizumab)",
     "HCPCS": "J1300"
  },
  {
     "Policy #": "5.85.12",
     "Brand Drug Name": "VPRIV ",
     "Full Policy": "VPRIV (velaglucerase alfa)",
     "HCPCS": "J3385"
  },
  {
     "Policy #": "5.85.13",
     "Brand Drug Name": "Durlaza",
     "Full Policy": "Durlaza (aspirin)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.14",
     "Brand Drug Name": "Elelyso ",
     "Full Policy": "Elelyso (taliglucerase alfa)",
     "HCPCS": "J3060"
  },
  {
     "Policy #": "5.85.15",
     "Brand Drug Name": "Promacta",
     "Full Policy": "Promacta (eltrombopag)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.17",
     "Brand Drug Name": "Ruconest",
     "Full Policy": "Ruconest (C1 esterase inhibitor [recombinant])",
     "HCPCS": "J0596"
  },
  {
     "Policy #": "5.85.18",
     "Brand Drug Name": "Cerdelga",
     "Full Policy": "Cerdelga (eliglustat)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.85.19",
     "Brand Drug Name": "Zavesca",
     "Full Policy": "Zavesca (miglustat)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.20",
     "Brand Drug Name": "Nplate",
     "Full Policy": "Nplate (romiplostim)",
     "HCPCS": "J2796"
  },
  {
     "Policy #": "5.85.21",
     "Brand Drug Name": "Mircera",
     "Full Policy": "Micera (methoxy polyethylene glycol-epoetin beta)",
     "HCPCS": "J0887, J0888"
  },
  {
     "Policy #": "5.85.23",
     "Brand Drug Name": "Firazyr ",
     "Full Policy": "Firazyr (icatibant)",
     "HCPCS": "J1744"
  },
  {
     "Policy #": "5.85.24",
     "Brand Drug Name": "Yosprala",
     "Full Policy": "Yosprala (aspirin with omeprazole)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.25",
     "Brand Drug Name": "Endari",
     "Full Policy": "Endari (L-glutamine oral powder)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.85.26",
     "Brand Drug Name": "Haegarda",
     "Full Policy": "Haegarda (C1 esterase inhibitor [human])",
     "HCPCS": "J0599"
  },
  {
     "Policy #": "5.85.27",
     "Brand Drug Name": "Siklos",
     "Full Policy": "Siklos (hydroxyurea)",
     "HCPCS": "J8999"
  },
  {
     "Policy #": "5.85.29",
     "Brand Drug Name": "Tavalisse",
     "Full Policy": "Tavalisse (fostamatinib)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.30",
     "Brand Drug Name": "Doptelet",
     "Full Policy": "Doptelet (avatrombopag)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.31",
     "Brand Drug Name": "Mulpleta",
     "Full Policy": "Mulpleta (lusutrombopag)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.85.32",
     "Brand Drug Name": "Takhzyro",
     "Full Policy": "Takhzyro (lanadelumab-flyo)",
     "HCPCS": "J0583"
  },
  {
     "Policy #": "5.85.33",
     "Brand Drug Name": "Ultomiris",
     "Full Policy": "Ultomiris (ravulizumab-cwvz)",
     "HCPCS": "J1303"
  },
  {
     "Policy #": "5.85.34",
     "Brand Drug Name": "Cablivi",
     "Full Policy": "Cablivi (caplacizumab-yhdp)",
     "HCPCS": "C9047"
  },
  {
     "Policy #": "5.85.35",
     "Brand Drug Name": "Reblozyl",
     "Full Policy": "Reblozyl (luspatercept-aamt)",
     "HCPCS": "J3490",
     "Comments for Procedure codes": "Added to PA eff 12/27/2019"
  },
  {
     "Policy #": "5.85.36",
     "Brand Drug Name": "Adakveo",
     "Full Policy": "Adakveo (crizanlizumab-tmca)",
     "HCPCS": "C9053",
     "Comments for Procedure codes": "Added to PA eff 01/24/2020, New code eff 04/01/2020"
  },
  {
     "Policy #": "5.85.37",
     "Brand Drug Name": "Givlaari",
     "Full Policy": "Givlaari (givosiran)",
     "HCPCS": "C9056",
     "Comments for Procedure codes": "Added to PA eff 01/24/2020, New code eff 04/01/2020"
  },
  {
     "Policy #": "5.85.38",
     "Brand Drug Name": "Oxbryta",
     "Full Policy": "Oxbryta (voxelotor)",
     "HCPCS": "J8499",
     "Comments for Procedure codes": "Added to PA eff 01/24/2020"
  },
  {
     "Policy #": "5.90.01",
     "Brand Drug Name": "Mirvaso",
     "Full Policy": "Mirvaso (brimonidine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.02",
     "Brand Drug Name": "Tazarotene",
     "Full Policy": "Tazorac (tazarotene), Fabior (tazarotene), tazarotene powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.03",
     "Brand Drug Name": "Tretinoin",
     "Full Policy": "Atralin (tretinoin)/ Avita (tretinoin)/ Differin (adapalene)/ Epiduo (adapalene+ benzoyl peroxide)/ Refissa (tretinoin)/ Renova (tretinoin)/ Retin-A (tretinoin)/ Tretin-X (tretinoin)/ Veltin (tretinoin + clindamycin)/ Ziana(tretinoin + clindamycin phosphate), Altreno lotion",
     "HCPCS": "S0117, J3490"
  },
  {
     "Policy #": "5.90.04",
     "Brand Drug Name": "Stelara",
     "Full Policy": "Stelara (ustekinumab)",
     "HCPCS": "J3357, J3358"
  },
  {
     "Policy #": "5.90.05",
     "Brand Drug Name": "Jetrea",
     "Full Policy": "Jetrea (ocriplasmin)",
     "HCPCS": "J7316"
  },
  {
     "Policy #": "5.90.06",
     "Brand Drug Name": "Regranex",
     "Full Policy": "Regranex (becaplermin)",
     "HCPCS": "S0157"
  },
  {
     "Policy #": "5.90.07",
     "Brand Drug Name": "Lidoderm Patches",
     "Full Policy": "Lidoderm Patches (lidocaine patch 5%), ZTLido (lidocaine topical system 1.8%) ",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.08",
     "Brand Drug Name": "Zyclara",
     "Full Policy": "Zyclara (imiquimod)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.09",
     "Brand Drug Name": "Topical Antifungals",
     "Full Policy": "Jublia (efinaconazole), Kerydin (tavaborole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.10",
     "Brand Drug Name": "Luzu",
     "Full Policy": "Luzu (luliconazole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.11",
     "Brand Drug Name": "Cosentyx",
     "Full Policy": "Cosentyx (secukinumab)",
     "HCPCS": "J3590"
  },
  {
     "Policy #": "5.90.12",
     "Brand Drug Name": "Ecoza",
     "Full Policy": "Ecoza (econazole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.13",
     "Brand Drug Name": "Oxistat",
     "Full Policy": "Oxistat (oxiconazole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.14",
     "Brand Drug Name": "Exelderm",
     "Full Policy": "Exelderm (sulconazole nitrate)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.15",
     "Brand Drug Name": "Ertaczo",
     "Full Policy": "Ertaczo (sertaconazole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.16",
     "Brand Drug Name": "Solaraze",
     "Full Policy": "Solaraze (diclofenac sodium)",
     "HCPCS": "J1130"
  },
  {
     "Policy #": "5.90.17",
     "Brand Drug Name": "Oral Rinses",
     "Full Policy": "Aquoral, Caphosol, Episil, Gelclair, Gelx, Mucotrol, Mugard, Neutrasal, Numoisyn, Oramagic Rx, SalivaMAX/Salivate RX, Bocasal, Salicept ",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.90.18",
     "Brand Drug Name": "Taltz",
     "Full Policy": "Taltz (ixekizumab)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.19",
     "Brand Drug Name": "Aldara",
     "Full Policy": "Aldara (imiquimod)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.20",
     "Brand Drug Name": "Lidocaine Topicals",
     "Full Policy": "Emla (lidocaine 2.5% and prilocaine 2.5%), Lidocaine Topical 5%, Pliaglis Cream (lidocaine 7% and tetracaine 7%), Tetravex Gel (tetracaine 2%) ",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.21",
     "Brand Drug Name": "Aminolevulinic Acid",
     "Full Policy": "Ameluz Gel, Levulan Kerastick (aminolevulinic acid)",
     "HCPCS": "J7308, J7345"
  },
  {
     "Policy #": "5.90.22",
     "Brand Drug Name": "Cyclosporine Ophthalmics",
     "Full Policy": "Restasis (cyclosporine ophthalmic emulsion), Cequa (cyclosporine ophthalmic solution)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.23",
     "Brand Drug Name": "Xiidra",
     "Full Policy": "Xiidra (lifitegrast ophthalmic solution)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.24",
     "Brand Drug Name": "Topical Anti-Inflammatories",
     "Full Policy": "Alcortin A (iodoquinol and hydrocortisone), Novacort (hydrocortisone and pramoxine)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.25",
     "Brand Drug Name": "Eucrisa",
     "Full Policy": "Eucrisa (crisaborole)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.26",
     "Brand Drug Name": "Ophthalmic VEGF Inhibitors",
     "Full Policy": "Beovu (brolucizumab-dbll), Eylea (aflibercept), Macugen (pegaptanib)",
     "HCPCS": "J0178, J0179, J2503"
  },
  {
     "Policy #": "5.90.27",
     "Brand Drug Name": "Doxepin Cream 5%",
     "Full Policy": "Doxepin Cream 5% (Prudoxin, Zonalon)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.28",
     "Brand Drug Name": "Siliq",
     "Full Policy": "Siliq (brodalumab)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.29",
     "Brand Drug Name": "Lucentis",
     "Full Policy": "Lucentis (ranibizumab)",
     "HCPCS": "J2778"
  },
  {
     "Policy #": "5.90.30",
     "Brand Drug Name": "Dupixent",
     "Full Policy": "Dupixent (dupilumab)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.31",
     "Brand Drug Name": "Santyl",
     "Full Policy": "Santyl (collagenase)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.32",
     "Brand Drug Name": "Tremfya",
     "Full Policy": "Tremfya (guselkumab)",
     "HCPCS": "J1628"
  },
  {
     "Policy #": "5.90.33",
     "Brand Drug Name": "Luxturna",
     "Full Policy": "Luxturna (voretigene neparvovec-rzyl)",
     "HCPCS": "J3398"
  },
  {
     "Policy #": "5.90.34",
     "Brand Drug Name": "Topical Products with Quantity Limits",
     "Full Policy": "Bryhali* Lotion 0.1% (halobetasol propionate), Duobrii Lotion 0.1%/0.045% (halobetasol propionate and tazarotene), Dovonex Cream 0.005% (calcipotriene), Enstilar Foam 0.005/0.064% (calcipotriene and betamethasone dipropionate), Lexette* Topical Foam 0.05% (halobetasol propionate), Pennsaid* Topical Solution 1.5% & 2% (diclofenac sodium), Taclonex* Ointment, Suspension 0.005/0.064% (calcipotriene and betamethasone dipropionate), Voltaren Gel 1% (diclofenac sodium)",
     "HCPCS": "J3490",
     "Comments for Procedure codes": "Added to PA 01/24/2020"
  },
  {
     "Policy #": "5.90.35",
     "Brand Drug Name": "Ilumya",
     "Full Policy": "Ilumya (tildrakizumab - asmn)",
     "HCPCS": "J3245"
  },
  {
     "Policy #": "5.90.36",
     "Brand Drug Name": "Oxervate",
     "Full Policy": "Oxervate (cenegermin-bkbj)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.37",
     "Brand Drug Name": "Qbrexza",
     "Full Policy": "Qbrexza (glycopyrronium)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.38",
     "Brand Drug Name": "Skyrizi",
     "Full Policy": "Skyrizi (risankizumab-rzaa)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.90.41",
     "Brand Drug Name": "Antifungal and Antibiotic Powders",
     "Full Policy": "Antifungals: Econazole Powder, Ketoconazole Powder, Nyamyc (nystatin) Powder, Nystop (nystatin) Powder; Antibiotics: Mupirocin Powder, Tobramycin Powder, Vancomycin Powder",
     "HCPCS": "J3490",
     "Comments for Procedure codes": "Pharmacy only benefit"
  },
  {
     "Policy #": "5.99.01",
     "Brand Drug Name": "Benlysta ",
     "Full Policy": "Benlysta (belimumab)",
     "HCPCS": "J0490"
  },
  {
     "Policy #": "5.99.02",
     "Brand Drug Name": "Exjade Jadenu",
     "Full Policy": "Exjade (tablets for oral suspension), Jadenu (deferasirox)",
     "HCPCS": "J8499"
  },
  {
     "Policy #": "5.99.03",
     "Brand Drug Name": "Evzio",
     "Full Policy": "Evzio (naloxone injection)",
     "HCPCS": "J2310"
  },
  {
     "Policy #": "5.99.06",
     "Brand Drug Name": "Xiaflex ",
     "Full Policy": "Xiaflex (collagenase clostridium histolyticum)",
     "HCPCS": "J0775"
  },
  {
     "Policy #": "5.99.08",
     "Brand Drug Name": "Diabetic Test Strips ",
     "Full Policy": "Diabetic Test Strips",
     "HCPCS": "A4253"
  },
  {
     "Policy #": "5.99.09",
     "Brand Drug Name": "Ferriprox (deferiprone) ",
     "Full Policy": "Ferriprox (deferiprone)",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.99.10",
     "Brand Drug Name": "Compound High Dollar Limit",
     "Full Policy": "Compound High Dollar Limit",
     "HCPCS": "No available code"
  },
  {
     "Policy #": "5.99.11",
     "Brand Drug Name": "Corticosteroid Powders",
     "Full Policy": "Clobetasol Powder, Fluticasone Powder, Mometasone Powder",
     "HCPCS": "J3490"
  },
  {
     "Policy #": "5.99.13",
     "Brand Drug Name": "Compounding Kits",
     "Full Policy": "Compounding Kits",
     "HCPCS": "No available code"
  },
  {
     "Policy #": "5.99.14",
     "Brand Drug Name": "Continuous Glucose Monitors (CGM)",
     "Full Policy": "Dexcom G5 CGM System, Dexcom G6 CGM System, Freestyle Libre 10 day CGM System, Freestyle Libre 14 day CGM System ",
     "HCPCS": "A9277, A9278, E0787, K0554, S1030, S1031"
  },
  {
     "Policy #": "5.99.15",
     "Brand Drug Name": "CGM Supplies",
     "Full Policy": "CGM Supplies",
     "HCPCS": "A4226, A9276, K0553"
  },
  {
     "Policy #": "6.01.03",
     "Full Policy": "Computed Tomography to Detect Coronary Artery Calcification ",
     "CPT": "75571, 75572, 75573, 75574",
     "HCPCS": "S8092",
     "ICD10 Diagnosis codes": "I25.10-I25.119, I25.700-I25.799, Z13.6"
  },
  {
     "Policy #": "6.01.06",
     "Full Policy": "Miscellaneous (Noncardiac, Nononcologic) Applications of Fluorine 18 Fluorodeoxyglucose Positron Emission Tomography",
     "CPT": "78608, 78609, 78811, 78812, 78813, 78814, 78815, 78816",
     "HCPCS": "A9526, A9552, A9580, G0235",
     "ICD10 Diagnosis codes": "G40.001-G40-919, M86.30-M86.69"
  },
  {
     "Policy #": "6.01.12",
     "Full Policy": "Thermography ",
     "CPT": "93740, 93799",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G56.40-G56.42, G57.70-G57.72, G89.0-G89.4, G90.50-G90.59, M25.50-M25.579, M54.00-M54.9, M79.60-M79.676, R52"
  },
  {
     "Policy #": "6.01.20",
     "Full Policy": "Cardiac Applications of Positron Emission Tomography Scanning",
     "CPT": "78429, 78430, 78431, 78432, 78433, 78434, 78459, 78491, 78492",
     "HCPCS": "A9526, A9552, A9555, A9598",
     "ICD10 Diagnosis codes": "D86.85, I25.10-I25.119, I51.9, I50.1"
  },
  {
     "Policy #": "6.01.24",
     "Full Policy": "Magnetic Resonance Spectroscopy",
     "CPT": 76390,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C50.11-C50.929, C61, C71.0-C71.9, F01.50-F03, G35, K70.0-K77"
  },
  {
     "Policy #": "6.01.26",
     "Full Policy": "Oncologic Applications of PET Scanning",
     "CPT": "78811, 78812, 78813, 78814, 78815, 78816, 78608, 78609",
     "HCPCS": "A9515, A9526, A9552, A9580, A9587, A9588, A9597, A9598, G0219, G0235, G0252",
     "Comments for Procedure codes": "Useful Modifiers which may be reported. PI, PS",
     "ICD10 Diagnosis codes": "C16.0-C16.9, C25.0-C25.9, C30.0-C31.9, C32.0-C32.9,C34.0-C34.92, C40.0-C41.9, C43.0-C43.9, C50.011-C50.929, C56.0-C56.9, C62.00-C62.92, C67.0-C67.9, C73, C76.0, C80.0-C80.1, C81.00-C81.99, C82.00-C88.9, C90.00-C90.02"
  },
  {
     "Policy #": "6.01.29",
     "Full Policy": "Magnetic Resonance Imaging for Detection and Diagnosis of Breast Cancer",
     "CPT": "77058, 77059",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C50.011-C50.019 C50.111-C50.119 C50.211-C50.219 C50.311-C50.319 C50.411-C50.419 C50.511-C50.519 C50.611-C50.619 C50.811-C50.819 C50.911-C50.919 C50.021-C50.029 C50.121-C50.129 C50.221-C50.229 C50.321-C50.329 C50.421-C50.429 C50.521-C50.529 C50.621-C50-629 C50.821-C50.829 C50.921-C50.929 C79.81 D05.9  N63 Z85.3  Z80.3  Z15.01"
  },
  {
     "Policy #": "6.01.32",
     "Full Policy": "Virtual Colonoscopy/Computed Tomography Colonography",
     "CPT": "74261, 74262, 74263",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C18.0-C18.9, C19, Z12.10-Z12.13, Z15.09, Z80.0"
  },
  {
     "Policy #": "6.01.33",
     "Full Policy": "Wireless Capsule Endoscopy to Diagnose Disorders of the Small Bowel, Esophagus, and Colon",
     "CPT": "91110, 91111, 0355T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D12.6, D13.2-D13.39, G89.29, K20-K23, K50.00-K50.919, K51.00-K51.319, K51.80-K51.919, K52.22, K90.0, K92.0-K92.2, Q85.0-Q85.9, R10.0-R10.13, R10.30-R10.33, R10.84, Z84.89"
  },
  {
     "Policy #": "6.01.38",
     "Full Policy": "Percutaneous Balloon Kyphoplasty and Mechanical Verebral Augmentation",
     "CPT": "22513, 22514, 22515, ",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C41.2, C79.51-C75.52, C90.00-C90.02, D18.09, D47.Z9, M48.50XA-M48.58XS, M80.08XA-M80.08XS, M84.48XA- M84.48XS, M84.58XA-M84.58XS, M84.68XA-M84.68XS"
  },
  {
     "Policy #": "6.01.40",
     "Full Policy": "Whole Body Dual X-Ray Absorptiometry to Determine Body Composition",
     "CPT": 76499,
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "6.01.43",
     "Full Policy": "Contrast-Enhanced Coronary Computed Tomography Angiography for Coronary Artery Evaluation",
     "CPT": "75572, 75573, 75574",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I25.10, I25.810-I25.812"
  },
  {
     "Policy #": "6.01.51",
     "Full Policy": "Interim Positron Emission Tomography Scanning in Oncology to Detect Early Response During Treatment",
     "CPT": "78811, 78812, 78813, 78814, 78815, 78816",
     "HCPCS": "G0235",
     "Comments for Procedure codes": "Useful Modifiers which may be reported. PS",
     "ICD10 Diagnosis codes": "C00.0-C14.8, C15.3-C15.9, C18.0-C18.9, C19, C25.0-C25.9, C30.0-C31.9, C32.0-C32.9, C34.0-C34.92, C43.0-C43.9, C50.011-C50.929, C53.0-C53.9, C56.0-C56.9, C62.00-C62.92, C73, C76.0, C80.0-C80.1, C81.00-C81.99, C82.00-C88.9"
  },
  {
     "Policy #": "6.01.52",
     "Full Policy": "Positron Emission Mammography",
     "CPT": "78999, 78811",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes for PEM may reported as shown",
     "ICD10 Diagnosis codes": "C50.011-C50.929, C79.81, D05.01-D05.99, R92.0-R92.8, Z12.31; Z12.39, Z85.3, Z85.43, Z80.3"
  },
  {
     "Policy #": "6.01.54",
     "Full Policy": "Dopamine Transporter Imaging With Single-Photon Emission Computed Tomography",
     "CPT": 78830,
     "HCPCS": "A9584",
     "ICD10 Diagnosis codes": "G20, G21.0-G21.9, G31.83"
  },
  {
     "Policy #": "6.01.55",
     "Full Policy": "Beta Amyloid Imaging with Positron Emission Tomography for Alzheimer's Disease",
     "CPT": "78811, 78814",
     "HCPCS": "A9586, A9599, Q9982, Q9983",
     "ICD10 Diagnosis codes": "F01.50-F03.91, G30.0-G30.9"
  },
  {
     "Policy #": "6.01.56",
     "Full Policy": "Mycardial Sympathetic Innervation Imaging in Patients with Heart Failure",
     "CPT": "0331T, 0332T ",
     "HCPCS": "A9582, A9590",
     "ICD10 Diagnosis codes": "I50.1-I50.9"
  },
  {
     "Policy #": "6.01.59",
     "Full Policy": "Coronary Computed Tomography Angiography With Selective Noninvasive Fractional Flow Reserve to Guide Use of Invasive Coronary Angiography",
     "CPT": "0501T, 0502T, 0503T, 0504T, 75574",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I20.9, I25.118-I25.119"
  },
  {
     "Policy #": "7.01.05",
     "Full Policy": "Cochlear Implant ",
     "CPT": "69930, 92507, 92601, 92602, 92603, 92604, 92605, 92606, 92607, 92608, 92609",
     "HCPCS": "L8614, L8615, L8616, L8617, L8619, L8621, L8622, L8623, L8624, L8625, L8627, L8628, L8629",
     "ICD10 Diagnosis codes": "H90.3-H90.6, H90.71, H90.72, H90.8, H90A11-H90A32"
  },
  {
     "Policy #": "7.01.07",
     "Full Policy": "Electrical Bone Growth Stimulation of the Appendicular Skeleton ",
     "CPT": "20974, 20975",
     "HCPCS": "E0747, E0749",
     "ICD10 Diagnosis codes": "Q74.0, S32.2xxK-S32.9xxK, S42.00xK-S42.92xK, S49.00xK-S49.199K, S52.00xK-S52.92xN, S59.00xK-S59.299K, S62.00xK-S62.92xK, S72.00xK-S72.92xN, S79.00xK-S79.199K, S82.00xK-S82.92Xn, S89.00xK-S89.399K, S92.00xK-S92.919K",
     "Comments for ICD10's": "7th digit “K” is subsequent encounter for nonunion (in forearm, femur, lower leg & ankle fractures 7th digits “M” and “N” are also nonunion for certain types of open fractures – in fractures of the shoulder, humerus, wrist, hand and foot there isn’t separation of open vs. closed nonunions)"
  },
  {
     "Policy #": "7.01.13",
     "Full Policy": "Surgical Treatment of Bilateral Gynecomastia",
     "CPT": 19300,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "N62"
  },
  {
     "Policy #": "7.01.15",
     "Full Policy": "Meniscal Allografts and Other Meniscus Implants",
     "CPT": 29868,
     "HCPCS": "G0428",
     "ICD10 Diagnosis codes": "M23.000-M23.92, S83.200-S83.289, S83.30-S83.32"
  },
  {
     "Policy #": "7.01.18",
     "Full Policy": "Automated Percutaneous and Endoscopic Discectomy",
     "CPT": "62287, 62380, 0274T, 0275T",
     "HCPCS": "C2614",
     "ICD10 Diagnosis codes": "M51.06, M51.07, M51.36, M51.37"
  },
  {
     "Policy #": "7.01.19",
     "Full Policy": "Injectable Bulking Agents for the Treatment of Urinary and Fecal Incontinence ",
     "CPT": "51715, 0377T",
     "HCPCS": "L8603, L8604, L8605, L8606",
     "ICD10 Diagnosis codes": "N39.3, R15.0-R15.9"
  },
  {
     "Policy #": "7.01.21",
     "Full Policy": "Reduction Mammaplasty for Breast-Related Symptoms",
     "CPT": 19318,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "N62"
  },
  {
     "Policy #": "7.01.29",
     "Full Policy": "Percutaneous Electrical Nerve Stimulation and Percutaneous Neuromodulation Therapy",
     "CPT": 64999,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "G56.40-G56.42, G57.70-G57.72, G89.21-G89.8, G89.4, G90.50-G90.59, M25.50- M25.579, M54.10- M54.18, M54.30-M54.32, M54.40-M54.42, M54.5, M54.6, M54.81, M54.89, M54.9, M79.1, M79.60-M79.676, R52"
  },
  {
     "Policy #": "7.01.48",
     "Full Policy": "Autologous Chondrocyte Implantation for Focal Articular Cartilage Lesions ",
     "CPT": "27412, 29870, 29871, 29873,  29874, 29875, 29876, 29877",
     "HCPCS": "J7330, S2112",
     "ICD10 Diagnosis codes": "M17.0-M17.12, M17.4-M17.5, M17.9, M12.561-M12.569, M23.90-M23.92, M23.8x1-M23.8x9, M25.861-M25.869, M93.261-M93.269, M89.8x6, M94.8x6, S89.90-S89.92, S99.811-S99.929"
  },
  {
     "Policy #": "7.01.54",
     "Full Policy": "Transmyocardial Revascularization",
     "CPT": "33140, 33141",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I20.0-I20.9, I25.10-125.119, I25.89, 125.9"
  },
  {
     "Policy #": "7.01.58",
     "Full Policy": "Intraoperative Neurophysiologic Monitoring",
     "CPT": "92585, 95829, 95867, 95868, 95907-95913, 95940, 95941, 95925, 95926, 95927, 95928, 95929, 95938, 95930, 95939, 95955",
     "HCPCS": "G0453",
     "ICD10 Diagnosis codes": "C71.0-C71.9, C79.31-C79.32, D33.0-D33.9, D43.0-D43.9, D49.6, I71.00-I71.9, M50.00-M50.93, M48.00-M48.08, M40.00-M40.57, M41.00-M41.9, I65.01-I65.9"
  },
  {
     "Policy #": "7.01.68",
     "Full Policy": "Extracranial Carotid Artery Stenting",
     "CPT": "37215, 37216, 37217",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I65.21-I65.29, I65.8, I63.59"
  },
  {
     "Policy #": "7.01.72",
     "Full Policy": "Percutaneous Intradiscal Electrothermal Annuloplasty, Radiofrequency Annuloplasty, and Biacuplasty",
     "CPT": "22526, 22527, also reported with: 72285,72295, 62290, 62291",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.73",
     "Full Policy": "Gastric Electrical Stimulation",
     "CPT": "43647, 43648, 43881, 43882, 64590, 64595, 95980, 95981, 95982",
     "HCPCS": "L8680, L8685, L8686, L8687, L8688",
     "ICD10 Diagnosis codes": "E08.43, E09.43, E10.43, E11.43, E13.43, K31.89"
  },
  {
     "Policy #": "7.01.75",
     "Full Policy": "Cryosurgical Ablation of Primary or Metastatic Liver Tumors ",
     "CPT": "47371, 47381, 47383, 76940",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C22.0-C22.9, C78.7"
  },
  {
     "Policy #": "7.01.81",
     "Full Policy": "Nerve Graft With Radical Prostatectomy",
     "CPT": "55840, 55842, 55845, 64910, 64911, 64912, 64913, 64999",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C61, N52.01-N52.9",
     "Comments for ICD10's": "No specific code. The following codes might be used:"
  },
  {
     "Policy #": "7.01.84",
     "Full Policy": "Semi-Implantable and Fully Implantable Middle Ear Hearing Aids",
     "CPT": 69799,
     "HCPCS": "S2230, V5095",
     "ICD10 Diagnosis codes": "H90.3, H90.41-H90.42, H90.5"
  },
  {
     "Policy #": "7.01.85",
     "Full Policy": "Electrical Stimulation of the Spine as an Adjunct to Spinal Fusion Procedures",
     "CPT": "20974, 20975",
     "HCPCS": "E0748, E0749",
     "ICD10 Diagnosis codes": "M43.15-M43.17, M48.05-M48.07, M51.04-M51.9"
  },
  {
     "Policy #": "7.01.87",
     "Full Policy": "Artificial Intervertebral Disc: Lumbar Spine",
     "CPT": "22857, 22862, 22865, 0163T, 0164T, 0165T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M51.05-M51.9"
  },
  {
     "Policy #": "7.01.91",
     "Full Policy": "Radiofrequency Ablation of Primary or Metastic Liver Tumors ",
     "CPT": "47370, 47380, 47382, 76940",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C22.0, C22.9, C7b.02, C78.7"
  },
  {
     "Policy #": "7.01.92",
     "Full Policy": "Cryosurgical Ablation of Miscellaneous Solid Tumors Other Than Liver, Prostate or Dermatologic Tumors ",
     "CPT": "19105, 20983, 32994, 50250, 50542, 50593",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C64.0-C65.9"
  },
  {
     "Policy #": "7.01.93",
     "Full Policy": "Decompression of the Intervertebral Disc Using Laser Energy (Laser Discectomy) or RadioFrequency Coblation (Nucleoplasty) ",
     "CPT": "62287, 77002",
     "HCPCS": "S2348",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.95",
     "Full Policy": "Radiofrequency Ablation of Miscellaneous Solid Tumors Excluding Liver Tumors ",
     "CPT": "20982, 32998, 41530, 50542, 50592, 76940",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C25.0-C25.9, C50.0-C50.9, C64.0-C64.9, C73, C76.0, C79.51-C79.52, D16.0-D16.9"
  },
  {
     "Policy #": "7.01.96",
     "Full Policy": "Computer-Assisted Navigation for Orthopedic Procedure",
     "CPT": "0054T, 0055T, 20985",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.101",
     "Full Policy": "Surgical Treatment of Snoring and Obstructive Sleep Apnea Syndrome",
     "CPT": "21199, 41512, 41530, 42145, 42299, 42820, 42821, 42825, 42826, 42830, 42831, 42835, 42836, 0466T, 0467T, 0468T",
     "HCPCS": "S2080, C9727",
     "ICD10 Diagnosis codes": "G47.30-G47.39"
  },
  {
     "Policy #": "7.01.102",
     "Full Policy": "Periureteral Bulking Agents as a Treatment of Vesicoureteral Reflux",
     "CPT": 52327,
     "HCPCS": "L8604",
     "ICD10 Diagnosis codes": "N11.0, N13.70-N13.739"
  },
  {
     "Policy #": "7.01.104",
     "Full Policy": "Subtalar Arthroereisis",
     "CPT": "0335T, 0510T, 0511T",
     "HCPCS": "S2117",
     "ICD10 Diagnosis codes": "M21.40-M21.42"
  },
  {
     "Policy #": "7.01.105",
     "Full Policy": "Balloon Ostia Dilation for Treatment of Chronic Sinusitis",
     "CPT": "31253, 31256, 31257, 31259, 31267, 31276, 31287, 31288,  31295, 31296, 31297, 31298, ",
     "HCPCS": "C1726",
     "ICD10 Diagnosis codes": "J32.0-J32.9"
  },
  {
     "Policy #": "7.01.106",
     "Full Policy": "Percutaneous Tibial Nerve Stimulation for Voiding Dysfunction",
     "CPT": "64566, 0587T, 0588T, 0589T, 0590T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "N32.81, N39.41-N39.498, R33.0-R33.9, R35.0, R39.15"
  },
  {
     "Policy #": "7.01.107",
     "Full Policy": "Interspinous and Interlaminar Stabilization/Distraction Devices (Spacers)",
     "CPT": "22867, 22868, 22869, 22870",
     "HCPCS": "C1821",
     "ICD10 Diagnosis codes": "M48.00-M48.08"
  },
  {
     "Policy #": "7.01.108",
     "Full Policy": "Artificial Intervertebral Disc: Cervical Spine",
     "CPT": "22856, 22858, 22861, 22864, 0095T, 0098T, 0375T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.109",
     "Full Policy": "Magnetic Resonance‒Guided Focused Ultrasound",
     "CPT": "0071T, 0072T, 0398T",
     "HCPCS": "C9734",
     "ICD10 Diagnosis codes": "C50.01-C50.929, C61, C71.0-C71.9, C79.51, D16.0-D16.9, D25.0-D25.9, D48.1"
  },
  {
     "Policy #": "7.01.110",
     "Full Policy": "Vertical Expandable Prosthetic Titanium Rib",
     "CPT": 22899,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M41.00-M41.9, Q76.3, Q76.6, Q77.2, Q87.2"
  },
  {
     "Policy #": "7.01.112",
     "Full Policy": "Transanal Endoscopic Microsurgery",
     "CPT": "0184T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C20, D12.8"
  },
  {
     "Policy #": "7.01.113",
     "Full Policy": "Bio-Engineered Skin and Soft Tissue Substitutes",
     "CPT": "15040, 15050, 15100, 15101, 15110, 15111, 15115, 15116, 15120, 15121, 15130, 15131, 15135, 15136, 15150, 15152, 15155, 15156, 15157, 15200, 15201, 15220, 15240, 15241, 15260, 15261, 15271, 15272, 15273, 15274, 15275, 15276, 15277, 15278, 15777",
     "HCPCS": "A6460, A6461, C9354, C9356, C9358, C9360, C9363, C9364, Q4100, Q4101, Q4102, Q4103, Q4104, Q4105, Q4106, Q4107, Q4108, Q4110,Q4111, Q4112, Q4112, Q4113, Q4114, Q4115, Q4116, Q4117, Q4118, Q4121, Q4122, Q4123, Q4124, Q4125, Q4126, Q4127, Q4128, Q4130, Q4134, Q4135, Q4136, Q4141, Q4142, Q4143, Q4146, Q4147, Q4149, Q4152, Q4158, Q4161, Q4164, Q4165, Q4166, Q4167, Q4171, Q4175 ,Q4176, Q4177, Q4178, Q4179, Q4181, Q4182, Q4193, Q4195, Q4196, Q4197, Q4200, Q4202, Q4203, Q4220, Q4222, Q4226",
     "Comments for Procedure codes": "Useful Modifiers which may be reported JC, JD",
     "ICD10 Diagnosis codes": "C50.011-C50.019, C50.111-C50.119, C50.211-C50.219, C50.311-C50.319, C50.411-C50.419, C50.511-C50.519, C50.611-C50.619, C50.811-C50.819, C50.911-C50.919, T34.011-T34.99, Z85.3, Z90.10-Z90.13"
  },
  {
     "Policy #": "7.01.116",
     "Full Policy": "Facet Joint Denervation",
     "CPT": "64625, 64633, 64634, 64635, 64636, 64999",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M47.011-M47.9, M54.10-M54.9, M96.1"
  },
  {
     "Policy #": "7.01.118",
     "Full Policy": "Surgical Treatment of Femoroacetabular Impingement ",
     "CPT": "29914, 22915, 22916",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M24.151-M24.159,M24.851-M24.859, M25.551-M25.559, M25.851-M25.859, M94.251-M94.259, S79.811A-S79.929S"
  },
  {
     "Policy #": "7.01.120",
     "Full Policy": "Facet Arthroplasty ",
     "CPT": "0202T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.121",
     "Full Policy": "Saturation Biopsy for Diagnosis and Staging of Prostate Cancer ",
     "CPT": "55706, 55700, 76942",
     "HCPCS": "G0416",
     "ICD10 Diagnosis codes": "C61, D07.5, D40.0"
  },
  {
     "Policy #": "7.01.122",
     "Full Policy": "Electromagnetic Navigation Bronchoscopy ",
     "CPT": "31626, 31627",
     "HCPCS": "A4648, C9751",
     "ICD10 Diagnosis codes": "C34.00-C34.92"
  },
  {
     "Policy #": "7.01.123",
     "Full Policy": "Plugs for Anal Fistula Repair",
     "CPT": 46707,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K60.0-K60.5"
  },
  {
     "Policy #": "7.01.124 ",
     "Full Policy": "Treatment of Varicose Veins/Venous Insufficiency ",
     "CPT": "36465, 36466,36468, 36470, 36471, 36473, 36474, 36475, 36476, 36478, 36479, 36482, 36483, 37500, 37700, 37718, 37722, 37735, 37760, 37761, 37765, 37766, 37780, 37785, 0524T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I83.001-I83.899, I87.2"
  },
  {
     "Policy #": "7.01.126",
     "Full Policy": "Image-Guided Minimally Invasive Decompression for Spinal Stenosis",
     "CPT": "0274T, 0275T, 72275",
     "HCPCS": "G0276",
     "ICD10 Diagnosis codes": "M43.15-M43.17, M48.05-M48.07"
  },
  {
     "Policy #": "7.01.127",
     "Full Policy": "Bronchial Thermoplasty ",
     "CPT": "31660, 31661",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.128",
     "Full Policy": "Bronchial Valves",
     "CPT": "31647, 31651, 31648, 31649",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "J43.0-J43.9, J44.0-J44.9"
  },
  {
     "Policy #": "7.01.130",
     "Full Policy": "Axial Lumbosacral Interbody Fusion",
     "CPT": "22586, 22899",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M43.15-M43.16, M48.05-M48.06, M51.05-M51.06, M51.15-M51.16, M51.35-M51.36, M96.0"
  },
  {
     "Policy #": "7.01.132",
     "Full Policy": "Transcatheter Aortic-Valve Implantation for Aortic Stenosis",
     "CPT": "33361, 33362, 33363, 33364, 33365, 33366",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I06.0-I06.9, I08.0; I08.2- I08.9"
  },
  {
     "Policy #": "7.01.136",
     "Full Policy": "Radiofrequency Ablation of the Renal Sympathetic Nerves as a Treatment for Resistant Hypertension",
     "CPT": "0338T, 0339T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I10-I15.9"
  },
  {
     "Policy #": "7.01.137",
     "Full Policy": "Magnetic Esophageal Sphincter Augmentation to Treat Gastroesophageal Reflux Disease",
     "CPT": "43284, 43285",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K21.0, K21.9"
  },
  {
     "Policy #": "7.01.139",
     "Full Policy": "Peripheral Subcutaneous Field Stimulation",
     "CPT": 64999,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.140",
     "Full Policy": "Handheld Radiofrequency Spectroscopy for Intraoperative Assessment of Surgical Margins during Breast-Conserving Surgery",
     "CPT": "0546T",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "prior to 07/01/19 use 19499",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.148",
     "Full Policy": "Endovascular Therapies for Extracranial Vertebral Artery Disease",
     "CPT": "0075T, 0076T, 36226, 36228",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I65.01-I65.09, I77.74"
  },
  {
     "Policy #": "7.01.149",
     "Full Policy": "Amniotic Membrane and Amniotic Fluid Injections",
     "CPT": "No CPT",
     "HCPCS": "Q4132, Q4133, Q4137, Q4138, Q4139, Q4140,  Q4145, Q4148, Q4150, Q4151, Q4153, Q4154, Q4155, Q4156, Q4157, Q4159, Q4160,  Q4162, Q4163, Q4168, Q4169, Q4170,  Q4173, Q4174, Q4183-Q4192, Q4194,  Q4198, Q4201, Q4204, Q4205, Q4206, Q4208, Q4209, Q4210, Q4211, Q4212, Q4213, Q4214, Q4215, Q4216, Q4217, Q4218, Q4219, Q4221",
     "ICD10 Diagnosis codes": "E08.621-E08.622; E09.621-E09.622; E10.621-E10.622; E11.621-E11.622; E13.621-E13.622; H04.121-H04.129; H11.001-H11.069; H16.001-H16.079; H16.231-H16.239; H18.10-H18.13; H18.30; H18.52; H18.59; H18.831-H18.839; L51.1; M17.10-M17.9; M72.2, T26.10-T26.12; T26.50-T26.52"
  },
  {
     "Policy #": "7.01.150",
     "Full Policy": "Vagal Nerve Blocking Therapy for Treatment of Obesity",
     "CPT": "0312T, 0313T, 0314T, 0315T, 0316T, 0317T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E66.01"
  },
  {
     "Policy #": "7.01.151",
     "Full Policy": "Prostatic Urethral Lift",
     "CPT": "52441, 52442",
     "HCPCS": "C9739, C9740",
     "ICD10 Diagnosis codes": "N40.1"
  },
  {
     "Policy #": "7.01.153",
     "Full Policy": "Adipose-Derived Stem Cells in Autologous Fat Grafting to the Breast",
     "CPT": "15769, 15771, 15772, 15773, 15774, 19366, 19380, 19499",
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes the following may be used",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "7.01.158",
     "Full Policy": "Balloon Dilation of the Eustachian Tube",
     "CPT": "No CPT",
     "HCPCS": "C9745",
     "ICD10 Diagnosis codes": "H68.001-H68.029, H69.80-H69.93, H65.00- H65.93, H66.001-H66.93, H67.1-H67.9, H71.00-H71.93, H72.00-H72.93 , H81.01-H81.09, H81.311-H81.49, H91.01-H91.93, J30.0-J30.9, J31.0-J32.9 "
  },
  {
     "Policy #": "7.01.160",
     "Full Policy": "Synthetic Cartilage Implants for Joint Pain",
     "CPT": 28291,
     "HCPCS": "L8641, L8642, L8699",
     "ICD10 Diagnosis codes": "M12.571-M12.579, M19.071-M19.079, M19.271-M19.279, M20.20-M20.22, M24.174-M24.176, M25.571-M25.579, M89.8X7, M94.8X7"
  },
  {
     "Policy #": "7.01.161",
     "Full Policy": "Three-Dimensional Printed Orthopedic Implants",
     "CPT": "0559T, 0560T, 0561T, 0562T",
     "HCPCS": "L8699",
     "ICD10 Diagnosis codes": "C40.20-C40.22, C47.20-C47.22, C49.20 - C49.22, D16.20-D16.22, D21.20-D21.22, L40.50, M05.051 thru M97.12XS (please see MPP Policy for specific dx codes)"
  },
  {
     "Policy #": "7.01.162",
     "Full Policy": "Surgical Treatments for Breast Cancer Related Lymphedema",
     "CPT": 38999,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I89.0-I89.9, I97.2"
  },
  {
     "Policy #": "7.01.163",
     "Full Policy": "Absorbable Nasal Implant for Treatment of Nasal Valve Collapse",
     "CPT": 30999,
     "HCPCS": "C9749, C1889",
     "ICD10 Diagnosis codes": "J84.89, J84.9"
  },
  {
     "Policy #": "7.01.164",
     "Full Policy": "Hydrogel Spacer use During Radiotherapy for Prostate Cancer",
     "CPT": 55874,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C61, C79.82, D07.5, D29.1, D40.0, D49.59"
  },
  {
     "Policy #": "7.03.02",
     "Full Policy": "Allogeneic Pancreas Transplant",
     "CPT": "48550, 48551, 48552, 48554",
     "HCPCS": "S2065",
     "ICD10 Diagnosis codes": "E10.10-E10.11, E10.21-E10.29, E10.641-E10.649, E10.69, E10.8, T86.890-T86.899, Z90.5"
  },
  {
     "Policy #": "7.03.04",
     "Full Policy": "Isolated Small Bowel Transplant",
     "CPT": "44132, 44133, 44135, 44136, 44715, 44720, 44721",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "K90.0-K90.9, K91.2"
  },
  {
     "Policy #": "7.03.05",
     "Full Policy": "Small Bowel/Liver and Multivisceral Transplant ",
     "CPT": "44120, 44121, 44132, 44133, 44715, 44720, 44721, 44799, 47133, 47135, 47140, 47141, 47142, 47143, 47144, 47145, 47146, 47147, 47399",
     "HCPCS": "S2053, S2054",
     "ICD10 Diagnosis codes": "K72.00-K72.01, K72.10-K72.11, K91.2"
  },
  {
     "Policy #": "7.03.06",
     "Full Policy": "Liver Transplant and Combined Liver-Kidney Transplant",
     "CPT": "47133, 47135, 47140, 47141, 47142, 47143, 47144, 47145, 47146, 47147, 47399",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "B15.0-B15.9, B16.0-B16.9, B17.0-B17.9, B18.0-B18.9, B19.0-B19.9, B25.1, B66.1, B66.5, C22.0-C22.9, D64.0-D64.9, D81.810, D84.0-D84.9, E72.00-E72.09, E74.00-E74.9, E78.0-E78.9, E80.0-E80.7, E83.0-E83.09, E83.1-E83.19, E85.0-E85.9, E88.9, G60.0-G60.9, I74.8, I82.0, I99.9, K71.10-K71.9, K74.0-K74.69, K75.81, K77, K83.0-K83.9, Q44.6, S36.12xA-S36.13xS, T86.41, T86.42, Z52.6"
  },
  {
     "Policy #": "7.03.07",
     "Full Policy": "Lung and Lobar Lung Transplant ",
     "CPT": "32850, 32851, 32852, 32853, 32854, 32855, 32856",
     "HCPCS": "S2060, S2061",
     "ICD10 Diagnosis codes": "A15.0, C96.6, D86.0, D86.2, E84.0-E84.9, E88.01, I26.01-I26.99, I27.0, I27.2, I27.82, I27.89, J42, J43.0-J43.9, J44.9, J47.0-J47.1, J60-J70.9, J84.1, M34.0-M34.9, P27.0-P27.9, Q33.0-Q33.9"
  },
  {
     "Policy #": "7.03.08",
     "Full Policy": "Heart/Lung Transplant ",
     "CPT": "33930, 33933, 33935",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "E84.0, E84.8-E84.9, I27.0, I27.1-I27.9, I50.1-I50.9, J43.0-J43.9, J44.0-J44.9, J84.1"
  },
  {
     "Policy #": "7.03.09",
     "Full Policy": "Heart Transplant",
     "CPT": "33940, 33944, 33945",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "I25.110-I25.9, I47.0-I47.9, I49.01-I49.02, I50.1-I50.9, R57.0",
     "Comments for ICD10's": "Codes related to end-stage heart failure may be due to a wide variety of cardiac disorders. Some of the main code ranges are included below."
  },
  {
     "Policy #": "7.03.11",
     "Full Policy": "Total Artificial Hearts and Implantable Ventricular Assist Devices",
     "CPT": "33927, 33928, 33929, 33975, 33976, 33977, 33978, 33979, 33980, 33990, 33991, 33992, 33993, 0451T-0463T",
     "HCPCS": "Q0478, Q0479, Q0480, Q0481, Q0482, Q0483, Q0484, Q0485, Q0486, Q0487, Q0488, Q0489, Q0490, Q0491, Q0492, Q0493, Q0494, Q0495, Q0496, Q0497, Q0498, Q0499, Q0500, Q0501, Q0502, Q0503, Q0504, Q0505, Q0506, Q0507, Q0508, Q0509, L8689",
     "ICD10 Diagnosis codes": "I09.81, I11.0, I13.0, I13.2, I50.1-I50.9, I97.0"
  },
  {
     "Policy #": "7.03.12",
     "Full Policy": "Autologous Islet Transplantation",
     "CPT": "48160, 0584T, 0585T, 0586T ",
     "HCPCS": "G0341, G0342, G0343, S2102",
     "ICD10 Diagnosis codes": "K86.1"
  },
  {
     "Policy #": "7.03.13",
     "Full Policy": "Composite Tissue Allotransplantation of the Hand and Face",
     "CPT": 26989,
     "HCPCS": "No HCPCS",
     "Comments for Procedure codes": "No specific codes--may be reported as shown",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "8.01.01",
     "Full Policy": "Adoptive Immunotherapy",
     "CPT": "36511, 37799, 38999, 96365, 0537T-0540T",
     "HCPCS": "Q2041, Q2042, S2107",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "8.01.02",
     "Full Policy": "Chelation Therapy for Off-Label Uses",
     "CPT": "96365, 96366, 96374",
     "HCPCS": "J0600, J0895, M0300, J0470, J3520, S9355",
     "ICD10 Diagnosis codes": "E08.00-E13.9, F84.0-F84.9, G30.0-G30.9, G35, I25.10-I25.9, M05.00-M06.09, M15.0-M19.93"
  },
  {
     "Policy #": "8.01.08",
     "Full Policy": "Intraoperative Radiotherapy",
     "CPT": "77424, 77425, 77469",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C20, C49.4, C49.8"
  },
  {
     "Policy #": "8.01.11",
     "Full Policy": "Transcatheter Arterial Chemoembolization to Treat Primary or Metastatic Liver Malignancies",
     "CPT": "37243, 75894",
     "HCPCS": "C1982, Q0083",
     "ICD10 Diagnosis codes": "C22.0-C22.9, C78.7"
  },
  {
     "Policy #": "8.01.16",
     "Full Policy": "Chemical Peels",
     "CPT": "15788, 15789, 15792, 15793, 17360",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "D48.5, L57.0, L70.0, L70.1, L70.9"
  },
  {
     "Policy #": "8.01.18",
     "Full Policy": "Lysis of Epidural Adhesions",
     "CPT": "62263, 62264, 64999",
     "HCPCS": "J7131",
     "ICD10 Diagnosis codes": "G96.8, G96.9, G97.1, G98.8"
  },
  {
     "Policy #": "8.01.40",
     "Full Policy": "Manipulation Under Anesthesia ",
     "CPT": "22505, 21073, 23700, 27275, 27570, 27860, 00640",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "M47.011-M47.9, M54.00-M54.9"
  },
  {
     "Policy #": "8.01.43",
     "Full Policy": "Radioembolization for Primary and Metastatic Tumors of the Liver",
     "CPT": "37243, 75894, 77778, 79445, 77399",
     "HCPCS": "C2616, S2095",
     "ICD10 Diagnosis codes": "C22.0, C78.7"
  },
  {
     "Policy #": "8.01.46",
     "Full Policy": "Intensity-Modulated Radiotherapy of the Lung",
     "CPT": "77301, 77338, 77385, 77386,",
     "HCPCS": "G6015, G6016",
     "ICD10 Diagnosis codes": "C34.00-C34.92, C50.011-C50.929"
  },
  {
     "Policy #": "8.01.48",
     "Full Policy": "Intensity-Modulated Radiotherapy: Cancer of the Thyroid",
     "CPT": "77301, 77338, 77385, 77386, ",
     "HCPCS": "G6015, G6016",
     "ICD10 Diagnosis codes": "C73"
  },
  {
     "Policy #": "8.01.49",
     "Full Policy": "Intensity-Modulated Radiotherapy: Abdomen and Pelvis",
     "CPT": "77301, 77338, 77385, 77386, ",
     "HCPCS": "G6015, G6016",
     "ICD10 Diagnosis codes": "C16.0-C16.9, C17.0-C17.9, C18.0-C18.9, C19, C20, C21.0-C21.8, C22.0-C22.9, C23, C24.0-C24.9, C25.0-C25.9, C26.0-C26.9, C51.0-C51.9, C52, C53.0-C53.9, C54.0-C54.9"
  },
  {
     "Policy #": "8.01.52",
     "Full Policy": "Orthopedic Applications of Stem Cell Therapy (Including Allografts and Bone Substitutes",
     "CPT": "20930, 20931, 20932, 20933, 20934, 20999, 38205, 38206, 38230, 38232, 38240, 38241, 0263T, 0264T, 0265T, 0565T, 0566T ",
     "HCPCS": "C9359, C9362",
     "ICD10 Diagnosis codes": "M00.00-M25.9, M84.30-M84.9, M91.0–M94.9, S32.000A-S32.9xxS, S42.001A-S42.92xS, S52.001A-S52.92xS, S62.001A-S62.92xS, S72.001A-S72.92xS, S82.001A-S82.92xS, S92.001A-S92.919S",
     "Comments for ICD10's": "Numerous diagnoses are relevant to this policy, the following are provided as examples."
  },
  {
     "Policy #": "8.01.55",
     "Full Policy": "Stem-Cell Theraphy for Peripheral Arterial Disease",
     "CPT": "0263T, 0264T, 0265T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "8.01.57",
     "Full Policy": "Baroreflex Stimulation Devices",
     "CPT": "0266T, 0267T, 0268T, 0269T, 0270T, 0271T, 0272T, 0273T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "Policy applies to All Diagnoses"
  },
  {
     "Policy #": "8.01.59",
     "Full Policy": "Intensity-Modulated Radiotherapy: Central Nervous System Tumors",
     "CPT": "77301, 77338, 77385, 77386, ",
     "HCPCS": "G6015, G6016",
     "ICD10 Diagnosis codes": "C71.0-C71.9, C72.0-C72.9, C79.31-C79.32, C79.40-C79.49"
  },
  {
     "Policy #": "8.01.61",
     "Full Policy": "Focal Treatments for Prostate Cancer",
     "CPT": "0582T, 55899",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "C61"
  },
  {
     "Policy #": "8.02.04",
     "Full Policy": "Lipid Apheresis",
     "CPT": "36516, 0342T",
     "HCPCS": "S2120",
     "ICD10 Diagnosis codes": "E78.0"
  },
  {
     "Policy #": "8.03.01",
     "Full Policy": "Functional Neuromuscular Electrical Stimulation",
     "CPT": "97116, 97530, 97760, 97763",
     "HCPCS": "E0764, E0770",
     "ICD10 Diagnosis codes": "G35, G81.00-G81.94, G82.20-G82.54, G83.0-G83.9, I63.00- I63.9, I69.30-I69.398, M21.371-M21.379"
  },
  {
     "Policy #": "8.03.05",
     "Full Policy": "Outpatient Pulmonary Rehabilitation",
     "CPT": "97110, 97530, 94799, 97799",
     "HCPCS": "G0237, G0238, G0239, G0302, G0303, G0304, G0305, G0424, S9473",
     "ICD10 Diagnosis codes": "J99, D86.0-D86.9, D38.0-D38.6,E84.0-E84.9, D84.1, C96.6, I11.0-I11.9, Z86.71, I27.0, J44.0-J44.9, J41.0-J41.8, J43.0-J43.9, J47.0-J47.9, J84.0-J84.9, M34.0-M34.9, Q21.0, P27.0-P27.9"
  },
  {
     "Policy #": "8.03.08",
     "Full Policy": "Cardiac Rehabilitation in the Outpatient Setting",
     "CPT": "93015, 93016, 93017, 93018, 93797, 93798 ",
     "HCPCS": "G0422, G0423, S9472",
     "ICD10 Diagnosis codes": "I20.8-I20.9, I21.01-I21.4, I50.1-I50.9, Z94.1, Z94.3, Z95.1, Z95.2-Z95.4, Z95.5, Z98.61"
  },
  {
     "Policy #": "8.03.09",
     "Full Policy": "Vertebral Axial Decompression",
     "CPT": 97012,
     "HCPCS": "S9090",
     "ICD10 Diagnosis codes": "M51.04-M51.07, M51.14-M51.17, M51.24-M51.27, M51.34-M51.37, M54.5"
  },
  {
     "Policy #": "8.03.10",
     "Full Policy": "Cognitive Rehabilitation",
     "CPT": "97129, 97130",
     "HCPCS": "G0515",
     "ICD10 Diagnosis codes": "S06.0-S06.9x9-"
  },
  {
     "Policy #": "8.03.13",
     "Full Policy": "Sensory Integration Therapy and Auditory Integration Therapy",
     "CPT": 97533,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "F84.0-F84.9"
  },
  {
     "Policy #": "9.03.06",
     "Full Policy": "Ophthalmologic Techniques That Evaluate the Posterior Segment for Glaucoma",
     "CPT": "92133, 0198T, 0329T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H40.141- H40.149, H40.30-H40.33, H40.40-H40.43, H40.89, H40.9, H42, Z01.00-Z01.01"
  },
  {
     "Policy #": "9.03.15",
     "Full Policy": "Retinal Prosthesis ",
     "CPT": "0100T, 0472T, 0473T",
     "HCPCS": "C1841, C1842, L8608, V2799",
     "ICD10 Diagnosis codes": "H35.31, H35.50, H35.52"
  },
  {
     "Policy #": "9.03.18",
     "Full Policy": "Optical Coherence Tomography  of the Anterior Eye Segment",
     "CPT": 92132,
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H40.20-H40.249"
  },
  {
     "Policy #": "9.03.20",
     "Full Policy": "Intraocular Radiation Therapy for Age-Related Macular Degeneration ",
     "CPT": "67036, 67299",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H35.30, H35.31, H35.32"
  },
  {
     "Policy #": "9.03.21",
     "Full Policy": "Aqueous Shunts and Stents for Glaucoma",
     "CPT": "0191T, 0253T, 0376T, 0449T, 0450T, 0474T, 66183",
     "HCPCS": "C1783, L8612",
     "ICD10 Diagnosis codes": "H25.011-H26.9, H40.10x0-H42"
  },
  {
     "Policy #": "9.03.29",
     "Full Policy": "Eyelid Thermal Pulsation for the Treatment of Dry Eye Syndrome",
     "CPT": "0207T, 0330T, 0507T, 0563T",
     "HCPCS": "No HCPCS",
     "ICD10 Diagnosis codes": "H04.121-H04.129; Policy applies to All Diagnoses"
  }
]

export default fullPolicies;