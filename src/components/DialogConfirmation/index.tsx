import ButtonInverseAdmin from '../ButtonInverseAdmin';
import ButtonPrimaryAdmin from '../ButtonPrimaryAdmin';

type Props = {
  message: string;
  id: number;
  onDialogAnswer: Function;
};

export default function DialogConfirmation({
  message,
  id,
  onDialogAnswer,
}: Props) {
  return (
    <div
      onClick={() => onDialogAnswer(false, id)}
      className="dsc-dialog-background"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="dsc-dialog-box"
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(false, id)}>
            <ButtonInverseAdmin text="Não" />
          </div>
          <div onClick={() => onDialogAnswer(true, id)}>
            <ButtonPrimaryAdmin text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}