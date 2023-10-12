import PersonIcon from '@mui/icons-material/Person';
interface PersonIconProps {
    fontSize: string,
    color: string;
}

export const ProfileIcon = ({fontSize,color}:PersonIconProps) => {
    return <PersonIcon fontSize={fontSize} style={{color:color}}/>
}