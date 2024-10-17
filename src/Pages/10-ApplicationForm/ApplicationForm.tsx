import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Img/Application Form/01-BG.png";
// import logo1 from "../../assets/Img/Application Form/01-LOGO.svg";
// import pdf from "../../assets/Img/Application Form/Application Form.pdf";
import { useTranslation } from "react-i18next";
import HeadingLabel from "../../Components/HeadingLabel/HeadingLabel";
import TextInput from "../../Components/Inputs/TextInput";
import TextareaInput from "../../Components/Inputs/TextareaInput";
import RadioButton from "../../Components/Inputs/RadioButton";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  return (
    <div
      className="w-full justify-center flex-col items-center flex"
      data-aos="fade-up"
    >
      <div
        className="w-[95%] h-[50vh] flex justify-center items-center"
        style={{
          background: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <div className="w-[90%]">
          <h1 className="text-[#fff] text-[30px] font-bold font-mont">
            {t("header.form")}
          </h1>
          <div className="text-[#fff] text-[18px] font-normal font-mont mt-2">
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              {t("header.home")}
            </span>{" "}
            &nbsp;&nbsp;-&nbsp;&nbsp;{" "}
            <span
              onClick={() => navigate("/applicationform")}
              className="cursor-pointer"
            >
              {t("header.form")}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[90%] my-10 border py-10 rounded flex flex-col items-center">
        <div className="w-[100%] flex justify-center">
          <HeadingLabel label="Anmeldeformular" />
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput id="fname" type="text" name="fname" label="Vorname" />
          </div>
          <div className="w-[48%]">
            <TextInput id="lname" type="text" name="lname" label="Nachname" />
          </div>
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput id="place" type="text" name="place" label="Wohnort" />
          </div>
          <div className="w-[48%]">
            <TextInput id="street" type="text" name="street" label="Strasse" />
          </div>
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput
              id="profession"
              type="text"
              name="profession"
              label="Beruf"
            />
          </div>
          <div className="w-[48%]">
            <TextInput
              id="employer"
              type="text"
              name="Employer"
              label="Arbeitgeber"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-end">
          {/* <div className="w-[48%]">
            <TextInput id="profession" type="text" name="profession" label="Beruf" />
          </div> */}
          <div className="w-[100%] lg:w-[48%]">
            <TextInput
              id="salary"
              type="text"
              name="salary"
              label="Monatseinkommen (Fr)"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput id="phone" type="text" name="phone" label="Telefon" />
          </div>
          <div className="w-[48%]">
            <TextInput
              id="citizenlocation"
              type="text"
              name="citizenlocation"
              label="Bürgerort"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput
              id="birthday"
              type="date"
              name="birthday"
              label="Geburtstag"
            />
          </div>
          <div className="w-[48%]">
            <TextInput
              id="civilstatus"
              type="text"
              name="civilstatus"
              label="Zivilstand"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between">
          <div className="w-[48%]">
            <TextInput
              id="expreience"
              type="number"
              name="expreience"
              label="Anz. Personen Erw"
            />
          </div>
          <div className="w-[48%]">
            <TextInput
              id="children"
              type="number"
              name="children"
              label="Kinder"
            />
          </div>
        </div>

        <div className="w-[80%] mt-4 mb-3">
          <p className="text-[16px] font-mont">
            Address and telephone of the current apartment landlord: A current
            debt collection statement must be enclosed with the registration.
          </p>
          <TextareaInput rows={4} id="address" name="address" />
        </div>

        <div className="w-[80%] flex flex-col justify-center lg:justify-between">
          <div className="w-[100%] lg:w-[48%]">
            <TextInput
              id="apartmentsince"
              type="text"
              name="apartmentsince"
              label="In dieser Wohnung seit"
            />
          </div>
          <div className="w-[100%] lg:w-[48%]">
            <TextInput
              id="appartmentrent"
              type="tel"
              name="appartmentrent"
              label="Wohnungsmiete (Fr)"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between mt-4">
          <TextareaInput
            rows={3}
            id="address"
            name="address"
            label="Referenzen"
          />
        </div>

        <div className="w-[90%] text-center flex justify-center mt-10">
          <HeadingLabel label="Angaben über die gewünschte Wohnung" />
        </div>

        <div className="w-[80%] flex justify-between mt-5">
          <div className="w-[48%]">
            <TextInput
              id="rooms"
              type="number"
              name="rooms"
              label="Anzahl Zimmer"
            />
          </div>
          <div className="w-[48%]">
            <TextInput id="floor" type="text" name="floor" label="Stockwerk" />
          </div>
        </div>

        <div className="w-[80%] flex flex-col lg:flex-row justify-center lg:justify-between mt-5">
          <div className="w-[100%] lg:w-[48%]">
            <TextInput
              id="movein"
              type="date"
              name="movein"
              label="Einzugstermin"
            />
          </div>
          <div className="w-[100%] lg:w-[48%]">
            <TextInput
              id="floor"
              type="text"
              name="floor"
              label="Mietzins inkl. NK (Fr)"
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between mt-5">
          <label className="text-[16px] font-mont text-[#555555]" htmlFor="">
            Wünschen sie eine Einstell-Garage{" "}
          </label>
        </div>

        <div className="w-[80%] flex justify-between mt-5">
          <RadioButton
            options={[
              { value: "ja", label: "Ja" },
              { value: "nein", label: "Nein" },
            ]}
          />
        </div>

        <div className="w-[80%] flex justify-between mt-5">
          <div className="w-[48%]">
            <TextInput id="Datum" type="text" name="Datum" label="Datum" />
          </div>
          <div className="w-[48%]">
            <TextInput
              id="Signature:"
              type="text"
              name="Signature:"
              label="Unterschrift"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="py-2 px-3 rounded text-center cursor-pointer bg-[#000] text-[#fff] text-[18px] transition-all duration-300 hover:bg-[#fff] hover:text-[#000] border-2 border-[#000] font-bold font-mont">
            Senden
          </div>
        </div>
      </div>

      {/* <div className="w-[85%] flex flex-col items-center gap-y-10  my-10">
        <p className="w-[100%] lg:w-[60%] font-mont justify-center font-semibold text-[20px]">
          {t("form.content1")}
        </p>

        <a href={pdf} download>
          <img className="w-[120px]" src={logo1} alt="logo1" />
        </a>
      </div> */}
    </div>
  );
};

export default ApplicationForm;
