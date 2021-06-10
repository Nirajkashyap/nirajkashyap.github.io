import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="w-full flex flex-row flex-wrap">
          <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
            <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
              <div className="w-full text-right">
                <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
              </div>
            </div>

            <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
              <div className="p-5 bg-white sticky top-0">
                <img
                  className="border border-indigo-100 shadow-lg round"
                  src="/niraj.jpeg"
                />
                <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
                  Niraj Kashyap
                </div>
                <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
                  JavaScript Developer  
                </div>
              </div>
              <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
                <a
                  target="_blank"
                  className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
                  href="https://www.linkedin.com/in/kashyapniraj/"
                >
                  {/* <i className="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i> */}
                  Linkedin
                </a>
                <a
                  target="_blank"
                  className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
                  href="https://github.com/nirajkashyap"
                >
                  {/* <i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i> */}
                  GitHub
                </a>
                <a
                  target="_blank"
                  className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
                  href="https://stackoverflow.com/users/2498621/niraj-kashyap"
                >
                  {/* <i className="fa fa-arrow-left text-gray-600 text-2xl pr-1 pt-1 float-right"></i> */}
                  Stack overflow 
                </a>
                <a
                  target="_blank"
                  className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
                  href="https://www.hackerrank.com/niraj38re"
                >
                  
                  HackerRank
                </a>
                <a
                  target="_blank"
                  className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
                  href="https://www.hackerearth.com/@niraj.38.re"
                >
                  
                  HackerEarth
                </a>
                
              </div>
            </div>

            <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
              
              <main>{children}</main>
              
           
            
            </div>
          </div>
        </div>

      
      
      
    </>
  )
}

export default Layout
