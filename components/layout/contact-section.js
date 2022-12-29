import Link from 'next/link'

const ContactSection = () => {
  return (
    <div className="my-24 w-full">
      <div className="max-w-xl mx-auto">
        <h2 className="mb-8 font-roman text-center text-gradient">
          Let's work together.
        </h2>
      </div>
      <div className="flex justify-center">
        <Link href="/contact" legacyBehavior>
          <a className="px-5 bg-tmlight transform text-tmdark rounded-full text-2xl py-3 hover:bg-white">More Details &#10141;</a>
        </Link>
      </div>
    </div>
  )
}

export default ContactSection;
