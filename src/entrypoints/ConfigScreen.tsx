import { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Button, Canvas } from "datocms-react-ui";

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  const openNetlifyPage = () => {
    window.open(`https://app.netlify.com/`);
  };

  return (
    <Canvas ctx={ctx}>
      <p>Weekly and daily backups have been successfully setup!</p>
      <Button onClick={openNetlifyPage}>Manage my functions</Button>
    </Canvas>
  );
}
