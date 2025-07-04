import { useState } from "react";
import { useRouter } from "next/router";
import { Close, Settings } from "@mui/icons-material";
import {
  Box,
  Avatar,
  Button,
  styled,
  Divider,
  Tooltip,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import { H6 } from "./Typography";
import { FlexBox } from "./flex-box";
import useSettings from "hooks/useSettings"; // custom styled components

const MainContainer = styled(Box)(({ theme }) => ({
  top: 50,
  right: 50,
  zIndex: 1501,
  position: "fixed",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  right: 50,
  zIndex: 99,
  bottom: 50,
  padding: 12,
  color: "#fff",
  position: "fixed",
  borderRadius: "50%",
  boxShadow: theme.shadows[12],
  backgroundColor: theme.palette.primary.main,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
const BodyWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "showBody",
})(({ theme, showBody }) => ({
  overflow: "auto",
  borderRadius: "4px",
  backgroundColor: "white",
  opacity: showBody ? 1 : 0,
  width: showBody ? 300 : 0,
  padding: showBody ? 24 : 0,
  boxShadow: theme.shadows[3],
  transition: "transform 0.4s",
  maxHeight: showBody ? "calc(100vh - 100px)" : 0,
  transform: `translateY(${showBody ? 0 : "10px"})`,
}));
const StyledAvatar = styled(Avatar)(() => ({
  flexGrow: 1,
  height: 100,
  width: "45%",
  cursor: "pointer",
  borderRadius: "10px",
  ":last-of-type": {
    flexGrow: 0,
  },
  ":hover": {
    "&::after": {
      opacity: 0.5,
    },
  },
  "::after": {
    opacity: 0,
    content: '""',
    width: "100%",
    height: "100%",
    background: "black",
    position: "absolute",
    transition: "all 0.3s",
  },
}));

const Setting = () => {
  const { push } = useRouter();
  const { updateSettings, settings } = useSettings();
  const [showBody, setShowBody] = useState(false);
  return (
  
    <div>
      
    </div>
  );
};

const demos = [
  {
    id: 0,
    path: "/market-1",
    img: "/assets/images/landing/page-1.png",
  },
  {
    id: 1,
    path: "/market-2",
    img: "/assets/images/landing/home/market-2.jpg",
  },

 
];
export default Setting;
