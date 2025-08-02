const XLSX = require("xlsx");

exports.parseExcel = (fileBuffer) => {
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

exports.buildPreviousAssignmentMap = (data) => {
  const map = {};
  data.forEach((entry) => {
    map[entry.Employee_EmailID] = entry.Secret_Child_EmailID;
  });
  return map;
};

exports.generateAssignments = (employees, previousMap) => {
  const shuffled = [...employees].sort(() => 0.5 - Math.random());
  const assigned = new Set();
  const result = [];

  for (let giver of employees) {
    const candidates = shuffled.filter(
      (candidate) =>
        candidate.Employee_EmailID !== giver.Employee_EmailID &&
        previousMap[giver.Employee_EmailID] !== candidate.Employee_EmailID &&
        !assigned.has(candidate.Employee_EmailID)
    );

    if (candidates.length === 0)
      throw new Error(`No valid match for ${giver.Employee_EmailID}`);

    const chosen = candidates[0];
    assigned.add(chosen.Employee_EmailID);
    result.push({
      Santa_Name: giver.Employee_Name,
      Santa_Email: giver.Employee_EmailID,
      Child_Name: chosen.Employee_Name,
      Child_Email: chosen.Employee_EmailID,
    });
  }

  return result;
};
