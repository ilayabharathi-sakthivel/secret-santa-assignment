const {
  parseExcel,
  buildPreviousAssignmentMap,
  generateAssignments,
} = require("../services/assignmentEngine");

exports.handleUpload = async (req, res) => {
  try {
    console.log(req.files);
    const currentBuffer = req.files.current[0].buffer;
    const pastBuffer = req.files.past[0].buffer;

    const currentData = parseExcel(currentBuffer);
    const pastData = parseExcel(pastBuffer);
    const previousMap = buildPreviousAssignmentMap(pastData);
    const result = generateAssignments(currentData, previousMap);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
