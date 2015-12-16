class ExpensesController < ApplicationController
  before_action :set_budget
  before_action :set_expense, only: [:show, :update, :destroy]

  # GET /expenses
  def index
    @expenses = @budget.expenses.all

    render json: @expenses
  end

  # GET /expenses/1
  def show
    render json: @expense
  end

  # POST /expenses
  def create
    @expense = @budget.expenses.new(expense_params)

    if @expense.save
      render json: @expense, status: :created, location: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /expenses/1
  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # DELETE /expenses/1
  def destroy
    @expense.destroy
  end

  private
    def set_budget
      @budget = current_user.budgets.find(params[:budget_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_expense
      @expense = @budget.expenses.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def expense_params
      params.require(:expense).permit(:date, :amount, :comment)
    end
end
