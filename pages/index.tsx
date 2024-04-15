import Head from "next/head";
import Form from "../src/components/form";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Next.js Mail Form Sender Example</title>
        </Head>
        <div className="md:w-1/2 w-5/6 p-5 border mx-auto my-5 bg-slate-200 rounded-lg">
          <h1 className="text-xl font-bold">Next.js Mail Form Sender Example</h1>
          <p className="mb-12">
            This is an basic example of how to send emails from a Next.js app using Nodemailer.
            <br />
            It uses Zod, React Hook Form, Handlebars, ReCAPTCHA and TailwindCSS.
            <br />
          </p>
          <Form />
        </div>
      </div>
    </>
  );
}
