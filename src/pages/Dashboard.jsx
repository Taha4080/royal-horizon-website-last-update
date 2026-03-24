import React from "react";
import "./Dashboard.css";

const departments = [
  {
    name: "IT",
    pdfs: [
      { title: "IT Backup Policy", url: "/assets/img/police/IT Backup Policy.pdf" },
      { title: "IT Guidelines", url: "/assets/img/police/IT Backup Policy.pdf" }
    ]
  },
  {
    name: "HR",
    pdfs: [
      { title: "HR Policy", url: "/pdfs/HR_Policy.pdf" },
      { title: "Leave Policy", url: "/pdfs/Leave_Policy.pdf" }
    ]
  },
  {
    name: "Sales",
    pdfs: [
      { title: "Sales Policy", url: "/pdfs/Sales_Policy.pdf" }
    ]
  },
  {
    name: "Finance",
    pdfs: [
      { title: "Finance Policy", url: "/pdfs/Finance_Policy.pdf" }
    ]
  },
  {
    name: "Purchasing",
    pdfs: [
      { title: "Purchasing Policy", url: "/pdfs/Purchasing_Policy.pdf" }
    ]
  },
  {
    name: "E-Commerce",
    pdfs: [
      { title: "E-Commerce Policy", url: "/pdfs/Ecommerce_Policy.pdf" }
    ]
  },
  {
    name: "Delivery",
    pdfs: [
      { title: "Delivery Policy", url: "/pdfs/Delivery_Policy.pdf" }
    ]
  },
  {
    name: "Others",
    pdfs: [
      { title: "Other Policies", url: "/pdfs/Other_Policy.pdf" }
    ]
  }
];

export default function Dashboard() {
  const handleOpenPDF = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // يفتح الملف في نافذة جديدة
  };

  return (
    <section className="dashboard-section">
      <h1>Welcome to Employee Dashboard</h1>
      <p>Select a department to view policies:</p>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <h2>{dept.name}</h2>
            <div className="pdf-list">
              {dept.pdfs.map((pdf, i) => (
                <button key={i} onClick={() => handleOpenPDF(pdf.url)}>
                  {pdf.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}