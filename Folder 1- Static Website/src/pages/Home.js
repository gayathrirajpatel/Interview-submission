import Header from "../components/Header";
import './Home.css'
import nag from '../assets/nag.jpg'

export default function Home(){
    return (
        <div className="Home shadow absolute border-solid border-2">
        <div >
          <br></br><br></br>
          <p className="w-204 h-27 text-center font-bold text-black text-center font-noto-sans font-bold text-2xl" >Welcome back Dan</p><br></br><br></br>

          <p className="pal" >Palladiun Dashboard</p><br></br><br></br>
          <select name="cars" id="cars">
            Wall
            <option value="all">All</option>

            </select>
            <select name="cars" id="cars">
            Week
            <option value="all">Period</option>

            </select>



            <img className="im" src={nag} alt="Image Description" />








            <div className="flex w-3/4">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">+6% climbers compared to same time&day last week
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">11 climbers came in today</div>
            </div>
            <div className="flex w-3/4 pt-4">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">22 new climbers this week</div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">+ 3% climbers since last week </div>
            </div>
            <div className="flex w-3/4 pt-4">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">42 hours of activity tracked this week</div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">30% climbers shared their session on social media</div>
            </div>
            <div className="flex w-3/4 pt-4">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">positive sentiment on climbs has increased by 10% since last week </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Let students know the wall has been reset <u> (clickable)</u></div>
            </div>
            </div>


            <div className="w-1092 h-125 flex flex-row ">
            <div className="flex flex-col space-x-2 ">
            <div className="text-black font-noto-sans text-lg font-bold leading-normal "><u>Week Overview </u></div>
            <div>
            + new climbers</div>
            <div>
            + traffic</div>
            <div>
            - difficult of climbs completed</div>
            <div>
            + content sharing</div>
            </div>

            <div>

            </div>
            <div className="flex flex-col space-x-2 ">
            <div className="text-black font-noto-sans text-lg font-bold leading-normal ">
            <u>Suggestions </u></div>

            <div>
            Set higher difficulty</div>
            <div>
            Repost climber contact <u>(clickable)</u></div>


            </div>

            <div className="flex flex-col space-x-2 ">
            <div className="text-black font-noto-sans text-lg font-bold leading-normal ">        <u>  Month Overview</u>
            </div>
            <div>
            + new climbers</div>
            <div>
            - traffic</div>
            <div>
            = difficult of climbs completed</div>
            <div>
            + content sharing</div>

          </div>
          
        </div>
        
        </div>
    );
} 

