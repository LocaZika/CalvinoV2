import { getShortDate } from "@ultils/date";

interface IEmailTemplate<T> {
  name: T;
  subject: T;
  email: T;
  message: T;
}

export default function EmailTemplate({name, subject, email, message}: IEmailTemplate<string>) {
  return (
    <table width="100%" cellSpacing="0" cellPadding="0" bgcolor="#f5f6f7">
      <tbody>
        <tr>
          <td height="50">&nbsp;</td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <table
              style={{
                border: "1px solid #f1f2f5",
                borderRadius: "2px",
              }}
              width="600"
              cellSpacing="0"
              cellPadding="0"
              bgcolor="#ffffff"
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      borderBottom: "1px solid #eeeeee",
                      paddingLeft: "16px",
                      backgroundColor: "#ffffff",
                    }}
                    colSpan={3}
                    align="left"
                    height="60"
                  >
                    <img
                      src="https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png"
                      alt="calvino-logo"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} height="20">&nbsp;</td>
                </tr>
                <tr>
                  <td width="20">&nbsp;</td>
                  <td align="left">
                    <table width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td colSpan={3} height="20">&nbsp;</td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <h3 style={{
                              fontSize: "24px",
                              fontWeight: "bold",
                              margin: "10px 0",
                            }}>
                              {subject}
                            </h3>
                            <br /><br />
                            <table>
                              <tbody>
                                <tr>
                                  <td>Name:&nbsp;</td>
                                  <td>{name}</td>
                                </tr>
                                <tr>
                                  <td>Email:&nbsp;</td>
                                  <td>{email}</td>
                                </tr>
                                <tr>
                                  <td>Created:&nbsp;</td>
                                  <td id="date-sending">{getShortDate()}</td>
                                </tr>
                              </tbody>
                            </table>
                            <br /><br />
                            <table>
                              <tbody>
                                <tr>
                                  <td style={{fontSize: "14px"}}>Message:</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize: "14px"}}>
                                    <p>{message}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} height="20">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style={{textAlign: "center"}} colSpan={3}>
                            <span
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "12px",
                                color: "#cccccc",
                              }}
                            >
                              This message was sent from Calvino
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="20">&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3} height="20">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="50">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  )
}
