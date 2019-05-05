import { mapGetters } from 'vuex';
export const resumeMixin = {
    data() {
        return {
            skillLevel: {
                beginner: "25%",
                novice: "50%",
                experienced: "75%",
                expert: "100%"
            }
        };
    },
    computed: {
        ...mapGetters([
            "getPersonalDetails",
            "getLinks",
            "getSkills",
            "getLanguages",
            "getProfessionalSummary",
            "getEmploymentHistory",
            "getEducation",
            "getCourses",
            "getInternshipHistory",
            "getActiveTheme"
        ]),
        getAddress() {
            let address = this.getPersonalDetails.address
                ? this.getPersonalDetails.address
                : "";
            let city = this.getPersonalDetails.city
                ? " " + this.getPersonalDetails.city
                : "";
            let country = this.getPersonalDetails.country
                ? ",<br>  " + this.getPersonalDetails.country
                : "";
            let postalCode = this.getPersonalDetails.postal_code
                ? ", " + this.getPersonalDetails.postal_code
                : "";

            return address + city + country + postalCode;
        },
        getPhoneNumber() {
            let phoneNumber = this.getPersonalDetails.phone_number;
            let result = "";
            if (phoneNumber.length >= 10) {
                result += "(" + phoneNumber.slice(0, 4) + ") ";
                result += phoneNumber.slice(4, 7) + "-";
                result += phoneNumber.slice(7, phoneNumber.length);
            }

            return result;
        },
        getRelevantLinks() {
            if (this.getLinks.length === 1) return this.getLinks;
            else return this.getLinks.slice(0, 2);
        },
        getRelevantSkills() {
            if (this.getSkills.length <= 5) return this.getSkills;
            else return this.getSkills.slice(0, 5);
        },
        getRelevantLanguages() {
            if (this.getLanguages <= 3) return this.getLanguages;
            else return this.getLanguages.slice(0, 3);
        },
        getRelevantExperience() {
            if (this.getEmploymentHistory.length <= 3)
                return this.getEmploymentHistory;
            else return this.getEmploymentHistory.slice(0, 3);
        },
        getRelevantEducation() {
            if (this.getEducation.length <= 2) return this.getEducation;
            else return this.getEducation.slice(0, 2);
        },
        getRelevantCourses() {
            if (this.getCourses.length <= 2) return this.getCourses;
            else return this.getCourses.slice(0, 2);
        },
        isEmptyPersonalInfo() {
            let pd = this.getPersonalDetails;
            if (pd.email === "" && pd.phone_number === "" && this.getAddress === "")
                return false;
            return true;
        },
        getRelevantInternships() {
            if (this.getInternshipHistory.length <= 2)
                return this.getInternshipHistory;
            else return this.getInternshipHistory.slice(0, 2);
        }
    }
}