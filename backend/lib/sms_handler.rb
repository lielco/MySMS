require 'twilio-ruby'

class SmsHandler
    def initialize
        account_sid = Rails.configuration.x.sms.twilio_account_sid
        auth_token = 'eeec9054dc6f52fa4b7e7121d0307065'
        @client = Twilio::REST::Client.new(account_sid, auth_token)
    end

    def send_sms(to:string, body: string)
        from = Rails.configuration.x.sms.twilio_sender_number
        
        message = @client.messages.create(
        from: from,
        to: to,
        body: body
        )
    end
end