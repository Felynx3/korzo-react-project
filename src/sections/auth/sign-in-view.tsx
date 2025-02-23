import { useAuth } from '@workos-inc/authkit-react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function SignInView() {
  const { signIn, signUp } = useAuth();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignUp = () => {
    signUp();
  };

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Button
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
      >
        Sign in with Email
      </Button>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign in</Typography>
        <Typography variant="body2" color="text.secondary">
          Don’t have an account?
          <Link variant="subtitle2" sx={{ ml: 0.5 }} onClick={handleSignUp}>
            Get started
          </Link>
        </Typography>
      </Box>

      {renderForm}
    </>
  );
}
