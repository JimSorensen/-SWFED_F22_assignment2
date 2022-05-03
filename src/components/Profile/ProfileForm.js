import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">Ny Kode</label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Skift kodeord</button>
      </div>
    </form>
  );
};

export default ProfileForm;
