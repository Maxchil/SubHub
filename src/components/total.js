import React from "react";
import { Container } from "react-bootstrap";
import "./navbar.css";

export default function Total({monthly}) {
  return (
    <>
      <div>
        <Container>
          <table>
            <tr><h1 className="total-title">Total: </h1></tr>
            <tr>
              <td>
                <h2>Monthly: ${monthly}</h2>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td>
                <h2>Yearly: ${monthly * 12}</h2>
              </td>
            </tr>
          </table>
        </Container>
      </div>
    </>
  );
}
