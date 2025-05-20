"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface Formula {
  id: number;
  formula_name: string;
  latex: string;
  formula_description: string;
}

export default function FormulaPage() {
  const { id } = useParams(); // Get formula ID from URL
  const [formula, setFormula] = useState<Formula | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if ID is correctly retrieved
    if (!id) {
      setError("Formula ID is missing.");
      setLoading(false);
      return;
    }

    if (!process.env.NEXT_PUBLIC_API_URL) {
      // Log error for API URL not being defined
      setError("API URL is not set.");
      setLoading(false);
      return;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/formulas/${id}`;
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Formula not found (HTTP ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setFormula(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading formula...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{
          marginBottom: '20px',
          color: 'black',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          {formula?.formula_name}
        </h1>
        <MathJaxContext>
          <MathJax>    
            <p style={{ marginBottom: "24px" }}><strong>Full Description:</strong> {formula?.formula_description}</p>
          </MathJax>
          <MathJax>
            <p style={{ fontSize: "24px", marginBottom: "20px" }}>{`\\(${formula?.latex}\\)`}</p>
          </MathJax>
        </MathJaxContext>
      <button
        onClick={() => window.close()} // Closes the current tab
        style={{ textDecoration: "underline", color: "blue", cursor: "pointer", background: "none", border: "none", padding: 0, font: "inherit" }}
        >
          ← Back to Home
        </button>
    </div>
  );
}
