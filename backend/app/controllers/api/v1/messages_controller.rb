require 'sms_handler'

# Controller for messages - requires user authentication
class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!

  # Retrieves all messages for the current user
  def index
    messages = current_user.messages
    render json:messages, status:200
  end

  def new
    message = Message.new
  end

  # Creates a new message and saves it to the DB
  def create
    recipient_phone_number = message_params[:recipient_phone_number]
    body = message_params[:body]

    sms = SmsHandler.new
    sms.send_sms(to: recipient_phone_number, body: body)
    
    message = Message.new(
      recipient_phone_number: recipient_phone_number, 
      body: body,
      user_id: current_user.id
    )

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
