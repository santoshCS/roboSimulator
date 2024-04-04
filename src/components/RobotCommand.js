import React from 'react';
import '../App.css';


const RobotCommand = () => {
  return (
    <div>

<h3><span className='btn_color'>Note :</span> Copy all the commands under the table and paste in a text area to check the output  </h3>
        <table id="robo">
            <tr>
                <th>command:1</th><th>command:2</th><th>command:3</th><th>command:4</th><th>command:5</th>
            </tr>
      <tr>
            <td>PLACE 0,0,NORTH <br/>
            MOVE <br/>
            REPORT</td>
          <td>
            PLACE 1,2,EAST <br/>
            MOVE <br/>
            MOVE <br/>
            LEFT <br/>
            MOVE <br/>
            REPORT <br/>
          </td>
          <td>
            PLACE 0,0,SOUTH <br/>
            MOVE <br/>
            REPORT <br/>
          </td>          
          <td>
            MOVE <br/>
            LEFT <br/>
            PLACE 0,0,NORTH <br/>
REPORT <br/>
          </td> 

          <td>
                    PLACE 1,2,NORTH <br/>
                    MOVE <br/>
                    RIGHT <br/>
                    MOVE <br/>
                    MOVE <br/>
                    LEFT <br/>
                    MOVE <br/>
                    REPORT
          </td>
      </tr>
        </table>
      
    </div>
  )
}

export default RobotCommand
