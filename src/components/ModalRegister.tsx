import { useState } from "react";
export default function ModalRegister() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [plan, setPlan] = useState("");
  const [gender, setGender] = useState("");
  const [buyBottle, setBuyBottle] = useState(false);
  const [buyShoes, setBuyShoes] = useState(false);
  const [buyCap, setBuyCap] = useState(false);
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [planError, setPlanError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [agree, setAgree] = useState(false);

  const inputFnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value);
    setFnameError("");
  };

  const inputLnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLname(event.target.value);
    setLnameError("");
  };

  const selectPlanOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(event.target.value);
    setPlanError("");
  };

  const radioGenderMaleOnChange = () => {
    setGender("male");
    setGenderError("");
  };

  const radioGenderFemaleOnChange = () => {
    setGender("female");
    setGenderError("");
  };

  const cbBuyBottleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuyBottle(event.target.checked);
  };

  const cbBuyShoesOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuyShoes(event.target.checked);
  };

  const cbBuyCapOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuyCap(event.target.checked);
  };

  const computeTotalPayment = () => {
    let total = 0;
    if (plan === "funrun") {
      total += 500;
    } else if (plan === "mini") {
      total += 800;
    } else if (plan === "half") {
      total += 1200;
    } else if (plan === "full") {
      total += 1500;
    }
    if (buyBottle) {
      total += 200;
    }
    if (buyCap) {
      total += 400;
    }
    if (buyShoes) {
      total += 600;
    }
    if (buyBottle && buyCap && buyShoes) {
      const itemTotal = 200 + 400 + 600;
      total -= itemTotal * 0.2;
    }
    return total;
  };

  const registerBtnOnClick = () => {
    let valid = true;

    if (fname.trim() === "") {
      setFnameError("Invalid first name");
      valid = false;
    }
    if (lname.trim() === "") {
      setLnameError("Invalid last name");
      valid = false;
    }
    if (plan === "") {
      setPlanError("Please select a Plan");
      valid = false;
    }
    if (gender === "") {
      setGenderError("Please select gender");
      valid = false;
    }

    if (!valid) return;
    alert(
      `Registration complete. Please pay money for ${computeTotalPayment().toLocaleString()} THB.`
    );
  };

  return (
    <div
      className="modal fade"
      id="modalregister" //id="modalregister": ตัวระบุของ modal (ใช้กับ data-bs-target หน้า HomePage)
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register CMU Marathon 🏃‍♂️</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* First name & Last name */}
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">First name</label>
                <input
                  className="form-control"
                  onChange={inputFnameOnChange}
                  value={fname}
                />
                {fnameError && <div className="text-danger">{fnameError}</div>}
              </div>
              <div>
                <label className="form-label">Last name</label>
                <input
                  className="form-control"
                  onChange={inputLnameOnChange}
                  value={lname}
                />
                {lnameError && <div className="text-danger">{lnameError}</div>}
              </div>
            </div>

            {/* Running Plan */}
            <div>
              <label className="form-label">Plan</label>
              {/* Fun run 5.5 Km (500 THB)
              Mini Marathon 10 Km (800 THB)
              Half Marathon 21 Km (1,200 THB)
              Full Marathon 42.195 Km (1,500 THB) */}
              <select
                className="form-select"
                onChange={selectPlanOnChange}
                value={plan}
              >
                <option value="">Please select..</option>
                <option value="funrun">Fun run 5.5 Km (500 THB)</option>
                <option value="mini">Mini Marathon 10 Km (800 THB)</option>
                <option value="half">Half Marathon 21 Km (1,200 THB)</option>
                <option value="full">
                  Full Marathon 42.195 Km (1,500 THB)
                </option>
              </select>
              {planError && <div className="text-danger">{planError}</div>}
            </div>

            {/* Gender */}
            <div>
              <label className="form-label">Gender</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="radio"
                  onChange={radioGenderMaleOnChange}
                  checked={gender === "male"}
                />
                Male 👨
                <input
                  className="mx-2 form-check-input"
                  type="radio"
                  onChange={radioGenderFemaleOnChange}
                  checked={gender === "female"}
                />
                Female 👩
              </div>
              {genderError && <div className="text-danger">{genderError}</div>}
            </div>

            {/* Extra Items */}
            <div>
              <label className="form-label">Extra Item(s)</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyBottleOnChange}
                />
                <label className="form-check-label">Bottle 🍼 (200 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyShoesOnChange}
                />
                <label className="form-check-label">Shoes 👟 (600 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyCapOnChange}
                />
                <label className="form-check-label">Cap 🧢 (400 THB)</label>
                {buyBottle && buyCap && buyShoes && (
                  <div className="text-success">(20% Discounted)</div>
                )}
              </div>

              <div className="alert alert-info mt-2">
                Promotion📢 Buy all items to get 20% Discount
              </div>
            </div>

            {/* Total Payment */}
            <div>
              Total Payment : {computeTotalPayment().toLocaleString()} THB
            </div>
          </div>

          <div className="modal-footer">
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="agree">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Register Button */}
            <button
              type="button"
              className="btn btn-success"
              onClick={registerBtnOnClick}
              disabled={!agree}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
