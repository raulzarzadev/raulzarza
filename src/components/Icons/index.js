import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BackspaceIcon from "@material-ui/icons/Backspace";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

export function LinkedInIcon({ ...rest }) {
  return <LinkedIn {...rest} />;
}
export function EmailIcon({ ...rest }) {
  return <MailOutlineIcon {...rest} />;
}

export function BackIcon({ ...rest }) {
  return <BackspaceIcon {...rest} />;
}

export function GitIcon({ ...rest }) {
  return <GitHubIcon {...rest} />;
}
