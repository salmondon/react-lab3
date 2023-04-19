import { Box, Container, Typography } from '@mui/material';

function Profile() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', mt: 2 }}>
          <img src="https://media.istockphoto.com/id/1413985191/photo/bengal-cat-looking-up-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ALBZdi9lmDFiAuZjoZkT4EMEuRlRVe2_8KjtpepyF5s=" alt="Profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Sunday
        </Typography>
      </Box>
    </Container>
  );
}

export default Profile;
