export default function Complain() {
    return (
      <>
      <div className="bg-slate-200">
        <div className="w-[50rem] mx-auto p-6 bg-slate-200 rounded-lg max-[802px]:w-[40rem] max-[642px]:w-[35rem] max-[562px]:w-[30rem] max-[484px]:w-[25rem] max-[402px]:w-[20rem] ">
          <center>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-blue-950 max-[340px]:text-2xl">
                COMPLAIN FORM
              </h1>
            </div>
          </center>
          <form className="space-y-4">
            <label htmlFor="name" className="block text-blue-950 text-[1.2rem] font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              className="w-full px-3 py-2 border-[0.3rem] bg-slate-50 border-blue-950 rounded-md focus:outline-none  "
            />
  
            <label htmlFor="email" className="block text-blue-950  text-[1.2rem] font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              className="w-full px-3 py-2 border-[0.3rem] border-blue-950 bg-slate-50 rounded-md focus:outline-none  "
            />
  
            <label htmlFor="message" className="block text-blue-950 text-[1.2rem] font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write something.."
              className="w-full px-3 py-2 border-[0.3rem] bg-slate-50 border-blue-950 rounded-md focus:outline-none  "
            ></textarea>
  
            <div className="flex justify-center">
            <button className='bg-sky-300 text-white py-[0.5rem] max-[340px]:py-[0.3rem] max-[340px]:px-[1rem] text-[1.2rem] font-sans font-bold rounded-[1rem] px-[2rem]'>submit</button>

            </div>
          </form>
          <div id="form-message" className="mt-4"></div>
        </div>
        </div>
      </>
    );
  }
  