import { httpRequest } from "@/lib/interceptor";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { LogOut } from "lucide-react";
import { AxiosError } from "axios";
import { UserAvatar } from "../user-avatar";

export default function Sidebar() {
  const { push } = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    httpRequest
      .delete("/api/auth/logout")
      .then(() => {
        localStorage.clear();
        push("/auth/login");
        toast({
          title: "Logged out",
          description: "successfuly logged out user",
        });
      })
      .catch((err) => {
        if (err instanceof AxiosError)
          toast({
            title: "Logout unsuccessful",
            description: err.response?.data.message,
          });
      });
  }
  
  return (
    <div className="bg-gray-900 text-gray-200 md:w-64 md:flex-col lg:flex hidden border-r border-gray-800">
      <div className="h-full flex-col pt-5 flex overflow-y-auto">
        <div className="h-full flex-col flex">
          <div className="px-4 space-y-4">
            <nav className="space-y-1 bg-cover bg-top">
              <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <span className="mx-4 font-medium">Chat</span>
              </a>
            </nav>
            <div>
              <nav className="mt-4 space-y-1 bg-cover bg-top"></nav>
            </div>
            <div>
              <nav className="mt-4 space-y-1 bg-cover bg-top"></nav>
            </div>
          </div>
          <div className="mt-6 p-4">
              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white">New feature availabel!</h2>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                  <div  className="flex items-center gap-x-2">
                      <UserAvatar showName={true} />
                  </div>
                  
                  <div onClick={handleLogout} className="text-gray-500 transition-colors duration-200 rotate-180 cursor-pointer dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
                    <LogOut className="mr-2 h-5 w-5" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}