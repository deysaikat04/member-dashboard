export interface IGetAllUserApiResponse {
    data:    IGetAllUserApiResponseData;
    success: boolean;
}

export interface IGetAllUserApiResponseData {
    next_start_index:    number;
    total_loyalty_users: number;
    loyalty_users:       IMember[];
    more:                boolean;
}

export interface IMember {
    last_name:           string;
    loyalty_tier_name:   string;
    uid:                 string;
    loyalty_enroll_time: string;
    loyalty_tier_id:     string;
    tier_details:        ITierDetails;
    available_points:    number;
    referral_code:       string;
    redeemed_points:     number;
    address_line2:       string;
    city:                string;
    first_name:          string;
    address_line1:       string;
    user_id:             string;
    phone_country_code:  string;
    zipcode:             string;
    state:               string;
    phone_number:        string;
    expiration_schedule: Array<string | number>;
    tags:                string[];
    pending_points:      number;
    dob:                 string;
    country:             string;
    referrer_email:      string;
    anniversary_date:    string;
    referral_url:        string;
    awarded_points:      number;
    has_opted_out:       boolean;
    user_email:          string;
}

export interface ITierDetails {
    period_start: string;
    points:       number;
    period_end:   string;
}

export interface IMemberDetailsProps {
    member: IMember;
    open: boolean;
    setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}