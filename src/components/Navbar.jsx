import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display:'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          The Code
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="search..." />
          search
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="data:image/jpeg;base64,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"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAWwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAgQFBgcBAAj/xAA4EAACAQMCBAMFBwIHAQAAAAABAgMABBEFIQYSMUETUWEHIjKRoRQjQlJxgbHh8GJyc8HC0dIk/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAfEQEBAAICAwEBAQAAAAAAAAAAAQIRAyExQVEScRP/2gAMAwEAAhEDEQA/ALJHHR0SvItHVa0y4FpQSiKPSlAUAEp6Uhkpzy0lloBmyUB026U+ZaC67UBGyx00liqVdabSR0whZoeu1NDDvUzNHTQxb9KCW1FoqikqKMopNOgV3FdFZ/x/xLIlyNJtC/LsbpkO+Py57etK3Qk2ldb4ygtbo2GlwNd3fTmHwKf+X7fOm0Gq6vNEjJdwc7nq0Xuk/lPdarKmO9EcmneFDPbtkKxwDt59s4ppr19dW4MsqXFlctjJjYPHIfP+tSytqsxkXi54mfSyg1SAcjdJIz3/AINSematYavD4tjcLJj4lz7ynyIrFJOIr6ZXjuiJ43GHVhsfX0PrTSyvJLW7ilspZYJObqr4rWNvtnKT0351ptItC0K4ku9Khlnfnlxhm239dqduKomYSJTYx70/kWgEb0wnloq0JaKtBuueSNm64BOK+fGa8v8AXpJbYF7qaVnBH61v95GZrK4iVirPGyhh1GRWX+yOzikv7u8nUFYwq8x7HGann1G+Pu6SejcC6lMyy38iBj+VFzj9cZq0pwDY+Gv2mNpmHdznFS83F+h6fKIZZyG6Z8NsfPFSS8RafJB4odSmM82ah/XR36Ui94H0wQci2wDYxkVnnG3DcejyRz2+BGDhhWqX3tA4dFwYPtWJM4+AkVRfaTfwX1lzWsivF39KWO5kMu8aP7MdUku1urRm9yJVdV/LnIP7Vd3rNfY+jfbNSkPwCNFz5kkn/atMeuuOSmsgoBG9OXFAbqaZJdelEU0JTRFNBitkoQvUisx4W0CS6uZlBSNyZI1j/AHBDDbu2Cw/RK01TUBZfZNM1e9iwFWRxKytggk+h/Sp8nhXim6hLrgnV5W+9vbteXt4ahB67GiTcIXMXCV1fxazfB0k5ooUcCFkBwT0zv7xGDjpVluNRtL6RrS3Fs7BcyMI1wg79qd32u6JLw+Wjv4TbmPIdGHbof6VH9L3BmNxwvrCIkpvZ3B35RGXUj0wfrUHqmm3VpyNcoeVUaSWM5AcDsR2rS9JuraOxhVmiZGXMUiDlDr2OAfpVT471CGSB4LVEBfZmXqSf7NPHLdLLCSA+zOdLa0uBy8rPNk/pgYrRgwdQR5Vjuh3hs3Eecb5Naho92Li0Q53xXRPDkvk9egt1orUEjemSTQ0RTQENFU0GOpqn8clYJ7O5xjLlJGHcYyP4q2A1U+PU8axVDtlhg+R7VnKbhy6pjpNnqmnRS3FjFFexTE8/IRz79Ovoaz/AFTQr22kKGCWKJiT4Zxsc+QNaNwLq1vLC9jdyiOVTggnr6inOucP2k92bgapIVA+DI2Nc0v5dfWUUqzttUm0yJXkSC0tgArufe69sVCaxeF7g+C2U5jyn6Zqb4su4IIUsLOcv3dgc5/vpVTnR0lxId8A48q3xzd3UuTL1BbVyJRvua0nha7IQIxrN7NeaZau+jEx8pBxV456vfNkUM9aDbyh4xv2pfNTB+jUVWprG1GVqDHDbVX+Ko/HgQeTg/WrDbQy3LhIUZm9KRrmkG2hBuDzP1wOgrOV1NnjLax3WNPltrtpocq2cgimMup3Ij5Hmm97GQTmr/qVmHB2BxVdvLGPf7tc1zzLrt05YfFatofFfxXXZTnJ7mh6rC6TLIVPKygZ8jVijth7qgDAqRjsFlZQUBBHTFH71dl/nuaUmw3mWrrpx+7WrBp/BOnXtgXeHwZsnklj2OP4NJk4Q1CxBMBFzGPyjDfKujHLcc2U1dCWU2FAJp7zjzqEiZon5JFKsOoIwafCYY61oolomJIA3J6AVYNL0OW4KvdZjT8vc/8AVPNG0eGwQM2JJ8bue36VNK2OlZ20Jb28NvEI4ECKOwpjrNkt/atEcCVd0J7098TAocsiMN9qV7OXTMdTs5beRkkjKnoc1WL5CGIwa2W7ijnXknjSVe3MN6grjRNPZ8+BIvoCDUrx30tOWe2c2enyzOvuYzVs0vQHmK7YUfE2NhU7b6daQHKwOf8AOwx9KkkOVCjAUdFUYFE4/pZcvwGK3SJEjjHuKMD1p0ijyoeDnJogOKqib6hpNnfr/wDRArHsw2I/eoCTg8c58O7IXsGTJ+eatXiCkGUZNPY0IJ8Hl8qULkdqg7e7LwlC2ZIyY2OeuOh+RFP7bGM0gkhISK45oauMVxmoBDdaG4zSmYDcnAprNfwJ08V/9OJm+oGKAWVpabCo1tZtg3LJFeR/4mtZMfPFOrW7guo/EtpUlTOMqc4PlRsHJpDtgVxnFAllGOtAKEv3mM7UzW5ZgWB6k/zQ5LkeNyjrihWRU2qE9d/5oCH0/UlfULd1f3LyEEAn8QGf/Q+VWOzuCVya7XqAfLMAMk0i5vVt7eS4fPIozjzrleohZXUtcguBPbxykY515seVJuryO2heedwsaAszHsK9XqMuhj3FLuvaDF4Uj21p8LEAyyAZG2NhuSfpjeo5/aF4gZn08wzfgmik5t/IgjcfvXK9U6a4aVrlpq1qs1rKCce8nQgjrt+4pc9xjvXq9W54NDTaiFvY0J3Oe9Uq71LV5bqVrS4eOAOVVR6bZ/fGa9XqZP/Z" />
          <Typography variant="span">Charles</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
