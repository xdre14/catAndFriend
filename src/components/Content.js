import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ImageListItemBar } from '@mui/material';

const Content = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let columns = 3;
  if (isSmallScreen) {
    columns = 1;
  } else if (isMediumScreen) {
    columns = 2;
  }

  return (
    <div>
      <Typography variant="h4" align="center">
        Wait for their owners
      </Typography>
      <ImageList cols={columns} gap={16} children variant="masonry">
        {data.map((item, index) => (
          <ImageListItem
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <img
              src={`images/${item.img}`}
              alt={item.title}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />

            <ImageListItemBar
              title={item.title}
              actionIcon={
                <FavoriteIcon
                  style={{ color: '#00d5ff' }}
                  data-testid="FavoriteIcon"
                />
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Content;
