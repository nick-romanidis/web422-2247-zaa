import { useForm } from "react-hook-form"
import { useEffect } from "react";

export default function HookForm() {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            userName: "",
            address: "",
            campus: "",
            program: [],
            parking: "",
            active: false
        }
    });

    const watchUserName = watch("userName");

    useEffect(() => {
        // Fetch data
        let data = {
            userName: "Nick",
            address: "123 Main St, Springfield U.S.A",
            campus: "newnham",
            program: ['CPA', 'CPP'],
            parking: "semester",
            active: true
        };

        // Set values of each form field
        // setValue("userName", data.userName);
        // setValue("address", data.address);

        for (const prop in data) {
            setValue(prop, data[prop]);
        }
    }, []);

    function submitForm(data) {
        alert(JSON.stringify(data));
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            User Name: (User typed {watchUserName}) <br />
            <input {...register("userName", { required: true, maxLength: 16, minLength: 4 })} /><br /><br />
            {errors.userName?.type === "required" && <span><br />Username is required.</span>}
            {errors.userName?.type === "maxLength" && <span><br />Username is too long.</span>}
            {errors.userName?.type === "minLength" && <span><br />Username is too short.</span>}
            <br /><br />

            Address: <br />
            <textarea {...register("address")}></textarea><br /><br />

            Campus: <br />
            <select {...register("campus")}>
                <option value="king">King</option>
                <option value="S@Y">Seneca at York</option>
                <option value="newnham">Newnham</option>
                <option value="markham">Markham</option>
            </select><br /><br />

            Program: <br />
            <select multiple {...register("program")}>
                <option value="DAD">Database Application Developer</option>
                <option value="CPA">Computer Programming &amp; Analysis</option>
                <option value="CPP">Computer Programming</option>
                <option value="DSA">Honours Bachelor of Data Science and Analytics</option>
            </select><br /><br />

            Parking: <br />
            <input type="radio" value="daily" {...register("parking")} /> Daily<br />
            <input type="radio" value="semester" {...register("parking")} /> Semester<br />
            <input type="radio" value="year" {...register("parking")} /> Academic Year<br /><br />

            <input type="checkbox" {...register("active")} />Currently Active<br /><br />

            <button type="submit" disabled={Object.keys(errors).length > 0}>Update</button>
        </form>
    )
}