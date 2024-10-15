import { useForm } from "react-hook-form"

export default function HookForm() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userName: "Nick",
            address: "123 Main St, Springfield U.S.A",
            campus: "newnham",
            program: ['CPA', 'CPP'],
            parking: "semester",
            active: true
        }
    });

    function submitForm(data) {
        alert(JSON.stringify(data));
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            User Name: <br />
            <input {...register("userName")} /><br /><br />

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

            <button type="submit">Update</button>
        </form>
    )
}