require 'sms_handler'

class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    messages = Message.all()
    render json:messages, status:200
  end

  def new
    message = Message.new
  end

  def create
    recipient_phone_number = message_params[:recipient_phone_number]
    body = message_params[:body]

    sms = SmsHandler.new
    sms.send_sms(to: recipient_phone_number, body: body)
    message = Message.new(
      recipient_phone_number: recipient_phone_number, 
      body: body)

    if message.save
      render json:message, statue:200
    else
      render json: {error: "Failed sending message"}
    end
  end

  def message_params
    params.require(:message).permit(:recipient_phone_number, :body)
  end
end
