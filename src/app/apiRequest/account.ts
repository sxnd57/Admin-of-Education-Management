import http from "@/utils/http";

const accountApiRequest = {
    me: () => http.get('/auth/me'),
}

export default accountApiRequest

