import { APClientRouterMode } from './APClientRouterMode';
import { APMode } from './APMode';
import { ClientMode } from './ClientMode';
import { RepeaterMode } from './RepeaterMode';
import { RouterMode } from './RouterMode';

export const TpLinkDocs = () => {
  return (
    <>
      <APClientRouterMode />
      <APMode />
      <ClientMode />
      <RepeaterMode />
      <RouterMode />
    </>
  );
};
