export default function Chat() {
    return(
        <div className="flex h-screen">
            <div className="bg-white-100 w-1/3">
            contacts
             </div>
            <div className="bg-blue-50 w-2/3 p-2 flex flex-col">
               <div className="flex-grow">
                Messages with Selected Person
                </div>
               <div className="flex gap-2 ">
                <input type="text"
                 className="bg-white border flex-grow p-2 rounded-sm" placeholder="Type your message here" />
                 <button className="bg-blue-500 p-2 text-white rounded-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                 </svg>
                 </button>
               </div>
            </div>
        </div>
    )
}