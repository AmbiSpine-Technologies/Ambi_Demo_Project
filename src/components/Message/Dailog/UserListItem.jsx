import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShareAlt, BiBlock, BiTrash } from 'react-icons/bi';
import { useState } from 'react';

const UserListItem = ({ user }) => {
  const [isColon, setIsColon] = useState(false);

  const handleColon = () => {
    setIsColon((prev) => !prev);
  };
    return (
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <p>{user.name}</p>
        <div className='position-relative mb-4'>
          <button className='btn outline-none border-0'
          onClick={handleColon}
          type='button'>
            <BsThreeDotsVertical />
          </button>
          {isColon &&
          <ul className='custom-dropdown gap-0'>
          <li className='d-flex justify-content-between'>
            <span>Share</span>
            <BiShareAlt />
          </li>
          <li className='d-flex justify-content-between'>
            <span>Block</span>
            <BiBlock />
          </li>
          <li className='d-flex justify-content-between'>
            <span>Remove</span>
            <BiTrash />
          </li>
        </ul>
          }
        </div>
      </div>
    );
  };
  export default UserListItem;