import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer p-4 mt-10 mb-20">
      <div className="flex-col gap-20 mx-auto w-9/12 md:flex md:flex-row">
        <div className="w-8 md:w-44">
          <h5 className="text-xl pb-4 font-semibold">Logo</h5>
          <p className="text-grey-400">admin@company.com</p>
          <p className="text-grey-400">123-456-789</p>
        </div>

        <div className="w-8 md:w-44">
          <h5 className="text-xl font-semibold pb-4">Get in Touch</h5>
          <p className="text-grey-400">
            Don&apos;t miss any updates of our new templates and extensions.!
          </p>

          <div className="subscribe pt-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-black-300 p-1"
            />
            <button className="p-2 bg-black text-white rounded mt-4">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-8 md:w-44">
          <h5 className="text-xl pb-4 font-semibold">Our Guidelines</h5>
          <div className="flex flex-col gap-5">
            <Link href={"#"} className="text-grey-400">
              Terms
            </Link>
            <Link href={"#"} className="text-grey-400">
              Privacy Policy
            </Link>
            <Link href={"#"} className="text-grey-400">
              Cookie Policy
            </Link>
            <Link href={"#"} className="text-grey-400">
              Explore more
            </Link>
          </div>
        </div>

        <div className="w-8 md:w-44">
          <h5 className="text-xl pb-4 font-semibold">Our Location</h5>
          <p className="text-grey-400">580, Grove St, New York, USA.</p>
        </div>
      </div>
    </div>
  );
}
