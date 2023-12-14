import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    
   
   ;

    const message = `
    ${body.name},
    ${body.content}
    `;
    const data = await resend.emails.send({
      from: `${body.name} <${body.email}>`,
      to: ["tung.le0319@gmail.com"],
      subject: body.subject,
      html: message,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
