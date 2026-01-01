const mongoose = require("mongoose");

const financialReportSchema = new mongoose.Schema({
  reportId: { type: Number, required: true, unique: true }, // Mã báo cáo
  startDate: { type: Date, required: true }, // Ngày bắt đầu kỳ báo cáo
  endDate: { type: Date, required: true }, // Ngày kết thúc kỳ
  totalRevenue: { type: Number, default: 0 }, // Tổng doanh thu
  totalExpense: { type: Number, default: 0 }, // Tổng chi phí
  netProfit: { type: Number, default: 0 }, // Lợi nhuận
  reportType: { type: String }, // Loại báo cáo (monthly, yearly...)
});

const FinancialReport = mongoose.model(
  "FinancialReport",
  financialReportSchema
);
module.exports = FinancialReport;
