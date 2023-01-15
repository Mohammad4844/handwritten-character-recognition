require "test_helper"

class RecognizerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get recognizer_index_url
    assert_response :success
  end

  test "should get app" do
    get recognizer_app_url
    assert_response :success
  end

  test "should get submit" do
    get recognizer_submit_url
    assert_response :success
  end
end
