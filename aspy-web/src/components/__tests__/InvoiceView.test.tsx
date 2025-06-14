import { render, screen } from "@testing-library/react";
import InvoiceView from "../InvoiceView";  // Ajusta la ruta si es necesario
import { Invoice } from "@/types/Invoice";

const mockInvoice: Invoice = {
  id: 1,
  number: "12345",
  issueDate: "2025-06-13",
  clientName: "ACME Corp",
  address: "123 Main St",
  serviceName: "Consulting",
  servicePrice: 1500,
  subtotal: 1500,
  tax: 180,
  total: 1680,
  paymentMethod: "Credit Card",
  contactEmail: "contact@acme.com",
  contactPhone: "555-1234",
  status: true,
};

describe("InvoiceView", () => {
  it("renderiza todos los campos con datos correctos", () => {
    render(<InvoiceView info={mockInvoice} />);

    expect(screen.getByText("Invoice")).toBeInTheDocument();
    expect(screen.getAllByText(`$${mockInvoice.servicePrice.toFixed(2)}`).length).toBeGreaterThan(0);


    expect(screen.getByText("Issue Date:")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.issueDate)).toBeInTheDocument();

    expect(screen.getByText("Client Name:")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.clientName)).toBeInTheDocument();

    expect(screen.getByText("Address:")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.address)).toBeInTheDocument();

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.serviceName)).toBeInTheDocument();
    expect(screen.getAllByText(`$${mockInvoice.servicePrice.toFixed(2)}`).length).toBeGreaterThan(0);


    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getAllByText(`$${mockInvoice.subtotal.toFixed(2)}`).length).toBeGreaterThan(0);


    expect(screen.getByText("Tax 12%")).toBeInTheDocument();
    expect(screen.getAllByText(`$${mockInvoice.tax.toFixed(2)}`).length).toBeGreaterThan(0);


    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getAllByText(`$${mockInvoice.total.toFixed(2)}`).length).toBeGreaterThan(0);


    expect(screen.getByText("Payment Method:")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.paymentMethod)).toBeInTheDocument();

    expect(screen.getByText("Contact Info:")).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.contactEmail)).toBeInTheDocument();
    expect(screen.getByText(mockInvoice.contactPhone)).toBeInTheDocument();
  });

  it("muestra valores por defecto cuando faltan datos", () => {
    const incompleteInvoice: Invoice = {
      id: 2,
      number: "",
      issueDate: "",
      clientName: "",
      address: "",
      serviceName: "",
      servicePrice: 0,
      subtotal: 0,
      tax: 0,
      total: 0,
      paymentMethod: "",
      contactEmail: "",
      contactPhone: "",
      status: false,
    };

    render(<InvoiceView info={incompleteInvoice} />);

    expect(screen.getByText("#N/A")).toBeInTheDocument();
    // El "N/A" puede aparecer varias veces, validamos que haya al menos uno
    expect(screen.getAllByText("N/A").length).toBeGreaterThan(0);
    // Validamos que los precios sean mostrados como $0.00
    expect(screen.getAllByText("$0.00").length).toBeGreaterThan(0);
  });
});
