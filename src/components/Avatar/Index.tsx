import Avatar from '@mui/material/Avatar';
interface AvatarProps {
    path: string;
}


export const Profile = ({path}:AvatarProps) => {
    return <div>
      <Avatar src={path} />
    </div>
}