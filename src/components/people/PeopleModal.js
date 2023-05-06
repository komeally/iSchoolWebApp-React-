import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({username, name, tagline, title, interestArea, office, website, phone, email, twitter, facebook, imagePath}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2">
            {name}
          </Typography>
          <Typography variant="h5" component="h2">
            {tagline}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <img src={imagePath} alt='me'></img>
          <Typography sx={{ mt: 2 }}>
            <a href={"mailto:" + email}>Email</a>
            {/* Matt's email is formatted incorrectly: matt.huenerfauth (AT) rit.edu */}
          </Typography>
          {/* how about if we are unsure if they have an area */}
          {website &&
            <Typography>
                <a href={website} target='_blank' rel='noreferrer'>My site</a>
            </Typography>
          }
          {interestArea &&
            <Typography>
              Interest Areas: {interestArea}
            </Typography>
          }
          {office &&
            <Typography>
              Office: {office}
            </Typography>
          }
          
          {phone &&
            <Typography>
                Phone: <a href={"tel:" + phone} target='_blank' rel='noreferrer'>{phone}</a>
            </Typography>
          }
          {twitter &&
            <Typography>
                Twitter: <a href={( () => {
                  if (twitter.includes("https://twitter.com/")) return twitter
                  else return "https://www.twitter.com/" + twitter
                })()} target='_blank' rel='noreferrer'>@{( () => {
                  if (twitter.includes("https://twitter.com/")) { 
                    return twitter.substring(twitter.lastIndexOf("/") + 1, twitter.length)
                  }
                  else return twitter
                })()}</a>
            </Typography>
          }
          {facebook &&
            <Typography>
                Facebook: <a href={"https://www.facebook.com/" + facebook} target='_blank' rel='noreferrer'>{facebook}</a>
            </Typography>
          }
          {/* remember, I will be looking for ALL OF THE DATA! */}
        </Box>
      </Modal>
    </div>
  );
}